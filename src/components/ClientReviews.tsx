'use client';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { reviews } from '@/data/reviews';

export default function ClientReviews() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <FaFacebook className="text-blue-600" />;
      case 'instagram':
        return <FaInstagram className="text-pink-600" />;
      case 'twitter':
        return <FaTwitter className="text-blue-400" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow us on social media for more updates and style inspiration
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition duration-300 hover:shadow-md"
            >
              {review.image && (
                <div className="relative h-64 w-full">
                  <Image
                    src={review.image}
                    alt={`Post by ${review.author}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {review.profileImage ? (
                    <Image
                      src={review.profileImage}
                      alt={review.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-lg">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-gray-900">
                      {review.platform === 'instagram' ? '@' : ''}{review.author}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">
                        {formatDate(review.date)}
                      </span>
                      <span className="ml-2">
                        {getPlatformIcon(review.platform)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{review.content}</p>
                {review.socialLink && (
                  <a
                    href={review.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80"
                  >
                    View on {review.platform.charAt(0).toUpperCase() + review.platform.slice(1)}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">Connect with us on social media</p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com/thecreativehubug/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/the_creative_hub_ug/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://x.com/creativehub_ug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
