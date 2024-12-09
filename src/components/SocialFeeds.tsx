'use client';

import { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function SocialFeeds() {
  useEffect(() => {
    // Reload social plugins after component mounts
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    if (window.twttr) {
      window.twttr.widgets.load();
    }
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Updates</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Stay connected with our latest work and style updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Instagram Feed */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <FaInstagram className="text-xl sm:text-2xl text-pink-600" />
              <h3 className="ml-2 text-lg sm:text-xl font-semibold">Instagram</h3>
            </div>
            <div className="aspect-square w-full">
              <iframe
                src="https://www.instagram.com/the_creative_hub_ug/embed"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              ></iframe>
            </div>
          </div>

          {/* Facebook Feed */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <FaFacebook className="text-xl sm:text-2xl text-blue-600" />
              <h3 className="ml-2 text-lg sm:text-xl font-semibold">Facebook</h3>
            </div>
            <div className="aspect-square w-full">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/thecreativehubug"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              >
                <blockquote
                  cite="https://www.facebook.com/thecreativehubug"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/thecreativehubug">
                    The Creative Hub Ug
                  </a>
                </blockquote>
              </div>
            </div>
          </div>

          {/* X (Twitter) Feed */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <FaTwitter className="text-xl sm:text-2xl text-blue-400" />
              <h3 className="ml-2 text-lg sm:text-xl font-semibold">X (Twitter)</h3>
            </div>
            <div className="aspect-square w-full">
              <a
                className="twitter-timeline"
                data-height="100%"
                data-chrome="nofooter noborders transparent"
                href="https://twitter.com/creativehub_ug"
              >
                Tweets by Creative Hub Ug
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">Follow us on social media</p>
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a
              href="https://www.facebook.com/thecreativehubug/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebook className="text-2xl sm:text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/the_creative_hub_ug/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaInstagram className="text-2xl sm:text-3xl" />
            </a>
            <a
              href="https://x.com/creativehub_ug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <FaTwitter className="text-2xl sm:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
