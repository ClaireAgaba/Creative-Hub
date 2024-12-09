export interface Review {
  id: string;
  author: string;
  platform: 'instagram' | 'facebook' | 'twitter';
  content: string;
  date: string;
  image?: string;
  profileImage?: string;
  socialLink?: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    author: 'the_creative_hub_ug',
    platform: 'instagram',
    content: 'Elevate your style with our custom-made suits. Each piece is crafted with precision and attention to detail. 🧵✨ #CreativeHubUg #MensWear',
    date: '2023-12-01',
    image: '/images/reviews/suit-review-1.jpg',
    socialLink: 'https://www.instagram.com/the_creative_hub_ug/'
  },
  {
    id: '2',
    platform: 'facebook',
    author: 'The Creative Hub Ug',
    content: 'Quality craftsmanship meets modern style. Visit us for your next bespoke suit or custom design. We\'re here to make you look your best! 👔',
    date: '2023-11-28',
    socialLink: 'https://www.facebook.com/thecreativehubug/'
  },
  {
    id: '3',
    platform: 'twitter',
    author: 'creativehub_ug',
    content: 'From traditional to contemporary, we create outfits that match your style and personality. Book your consultation today! #MensWear #Tailoring',
    date: '2023-12-05',
    socialLink: 'https://x.com/creativehub_ug'
  }
];
