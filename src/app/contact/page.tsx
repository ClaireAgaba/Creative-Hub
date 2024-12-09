import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import SocialFeeds from '@/components/SocialFeeds';

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Contact Header */}
      <div className="bg-gray-50">
        <div className="relative min-h-[400px] flex items-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/call.jpg"
              alt="Contact background"
              fill
              className="object-cover opacity-25"
              priority
              sizes="300vw"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-600">
                  We'd love to hear from you. Get in touch with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Feeds Section */}
      <SocialFeeds />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              {/* Address with Google Maps Link */}
              <a 
                href="https://maps.app.goo.gl/DKCUgPyALiJviifT8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-600 hover:text-gray-900 mb-4"
              >
                <FaMapMarkerAlt className="text-xl mt-1 flex-shrink-0" />
                <span>Luwum Street, Calfornia Plaza Kampala, Uganda</span>
              </a>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-3 text-gray-600 mb-4">
                <FaPhone className="text-xl mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+256703198158" 
                    className="hover:text-accent block"
                  >
                    +256 703 198 158
                  </a>
                  <a 
                    href="tel:+256779145601" 
                    className="hover:text-accent block"
                  >
                    +256 779 145 601
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 text-gray-600 mb-8">
                <FaEnvelope className="text-xl mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@creativehubug.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  info@creativehubug.com
                </a>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.facebook.com/thecreativehubug/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a 
                    href="https://www.instagram.com/the_creative_hub_ug/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600"
                  >
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a 
                    href="https://x.com/creativehub_ug" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    <FaTwitter className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
