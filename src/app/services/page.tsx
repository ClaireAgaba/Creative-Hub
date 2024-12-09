'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaTape, FaUserTie, FaShoppingBag, FaGift, FaVideo, FaBuilding, FaCheck, FaCalendarAlt, FaRing } from 'react-icons/fa';
import ServiceImageModal from '@/components/ServiceImageModal';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const services = [
    {
      icon: <FaUserTie className="w-8 h-8"/>,
      title: "Personal Styling",
      description: "Experience personalized fashion guidance from our expert stylists. We'll help you create a wardrobe that reflects your personality and lifestyle.",
      features: [
        "Style consultation",
        "Color analysis",
        "Wardrobe audit",
        "Outfit planning",
        "Accessory recommendations"
      ],
      image: "/images/services/img3.jpg"
    },
    {
      icon: <FaTape className="w-8 h-8" />,
      title: "Custom Tailoring & Alterations",
      description: "Precision tailoring for the perfect fit. Our master craftsmen ensure every garment fits you impeccably.",
      features: [
        "Made-to-measure suits",
        "Precise alterations",
        "Fabric selection",
        "Multiple fittings",
        "Expert craftsmanship"
      ],
      image: "/images/services/img1.jpg"
    },
    {
      icon: <FaRing className="w-8 h-8" />,
      title: "Wedding Packages",
      description: "Make your special day perfect with our comprehensive wedding attire services for grooms and groomsmen.",
      features: [
        "Groom styling consultation",
        "Groomsmen coordination",
        "Custom wedding suits",
        "Accessories matching",
        "Timeline planning"
      ],
      image: "/images/services/img2.jpg"
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: "Virtual Shopping Assistance",
      description: "Shop from anywhere with our virtual styling and consultation services.",
      features: [
        "Video consultations",
        "Digital style boards",
        "Remote measurements",
        "Virtual fittings",
        "Online ordering"
      ],
      image: "/images/virtual-shopping.jpg"
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Corporate Wear Solutions",
      description: "Professional attire solutions for businesses, ensuring your team looks polished and consistent.",
      features: [
        "Corporate wardrobe planning",
        "Bulk ordering",
        "Team coordination",
        "Brand alignment",
        "Regular maintenance"
      ],
      image: "/images/services/img6.jpg"
    },
    {
      icon: <FaCheck className="w-8 h-8" />,
      title: "Ready to Wear",
      description: "Lifetime alteration guarantee on all our custom pieces, ensuring your garments always fit perfectly.",
      features: [
        "Lifetime adjustments",
        "Size modifications",
        "Style updates",
        "Repair services",
        "Quality maintenance"
      ],
      image: "/images/services/img4.jpg"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Event Specific Styling",
      description: "Look your best at every occasion with our event-specific styling services.",
      features: [
        "Event consultation",
        "Outfit coordination",
        "Accessories styling",
        "Multiple options",
        "Occasion-specific advice"
      ],
      image: "/images/services/img5.jpg"
    },
    {
      icon: <FaGift className="w-8 h-8" />,
      title: "Gift Services",
      description: "Perfect gifting solutions for the fashion-conscious gentleman.",
      features: [
        "Gift cards",
        "Custom packages",
        "Personal shopping",
        "Gift wrapping",
        "Digital vouchers"
      ],
      image: "/images/services/img.jpg"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Services Header */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/services-bg.jpg"
            alt="Services background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the pinnacle of men's fashion with our comprehensive range of personalized services
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                activeService === index ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              {/* Service Image with Hover Effect */}
              <div className="relative h-48 group-hover:h-72 transition-all duration-300 ease-in-out">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-all duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-white/90 text-black px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage({ src: service.image, title: service.title });
                    }}
                  >
                    View Design
                  </button>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 transform translate-y-0 group-hover:translate-y-[-1rem] transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-accent">{service.icon}</div>
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features List */}
                <div className={`space-y-2 transition-all duration-300 ${
                  activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <h4 className="font-semibold text-gray-900 mt-4">Features:</h4>
                  <ul className="list-none space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <FaCheck className="w-4 h-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <Link
                  href="/order"
                  className="mt-4 inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose The Creative Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description: "Years of experience in premium tailoring and styling",
                icon: <FaTape className="w-12 h-12 text-accent" />
              },
              {
                title: "Personalized Service",
                description: "Individual attention and customized solutions for every client",
                icon: <FaUserTie className="w-12 h-12 text-accent" />
              },
              {
                title: "Quality Guarantee",
                description: "Commitment to excellence with lifetime alteration guarantee",
                icon: <FaCheck className="w-12 h-12 text-accent" />
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ServiceImageModal
        isOpen={!!selectedImage}
        closeModal={() => setSelectedImage(null)}
        image={selectedImage?.src || ''}
        title={selectedImage?.title || ''}
      />
    </div>
  );
}
