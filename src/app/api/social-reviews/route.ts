import { NextResponse } from 'next/server';

interface SocialReview {
  id: string;
  platform: 'instagram';
  content: string;
  author: string;
  date: string;
  mediaUrl?: string;
  permalink?: string;
}

export async function GET() {
  try {
    const { INSTAGRAM_ACCESS_TOKEN } = process.env;
    const reviews: SocialReview[] = [];

    if (!INSTAGRAM_ACCESS_TOKEN) {
      console.log('Instagram token missing or invalid');
      return NextResponse.json({ 
        error: 'Instagram configuration is incomplete',
        debug: { hasToken: false }
      }, { status: 401 });
    }

    try {
      // First, get the user profile to verify the token
      const profileResponse = await fetch(
        `https://graph.instagram.com/me?fields=id,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`
      );

      if (!profileResponse.ok) {
        const error = await profileResponse.json();
        console.error('Instagram API Profile Error:', error);
        throw new Error(error.error?.message || 'Failed to verify Instagram credentials');
      }

      // Then get the media
      const mediaResponse = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`
      );

      if (!mediaResponse.ok) {
        const error = await mediaResponse.json();
        console.error('Instagram API Media Error:', error);
        throw new Error(error.error?.message || 'Failed to fetch Instagram media');
      }

      const mediaData = await mediaResponse.json();
      console.log('Instagram Media Response:', JSON.stringify(mediaData, null, 2));

      if (mediaData.data) {
        mediaData.data.forEach((post: any) => {
          if (post.caption) {
            reviews.push({
              id: post.id,
              platform: 'instagram',
              content: post.caption || '',
              author: post.username || 'Instagram User',
              date: post.timestamp,
              mediaUrl: post.media_url,
              permalink: post.permalink
            });
          }
        });
      }

      return NextResponse.json({ 
        reviews,
        debug: {
          reviewCount: reviews.length,
          hasToken: true,
          mediaData: mediaData.data ? mediaData.data.length : 0
        }
      });

    } catch (apiError) {
      console.error('Instagram API Error:', apiError);
      return NextResponse.json({ 
        error: 'Failed to fetch Instagram data',
        debug: {
          message: apiError instanceof Error ? apiError.message : 'Unknown API error',
          hasToken: true
        }
      }, { status: 500 });
    }

  } catch (error) {
    console.error('General Error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      debug: {
        message: error instanceof Error ? error.message : 'Unknown error',
        hasToken: !!process.env.INSTAGRAM_ACCESS_TOKEN
      }
    }, { status: 500 });
  }
}
