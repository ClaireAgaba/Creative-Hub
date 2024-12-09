'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal from '@/components/ImageModal';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    description: string;
  }>(null);

  // Array of gallery images with descriptions
  const galleryImages = [
    {
      src: '/images/gallery/img1.jpeg',
      title: 'Classic Three-Piece Suit',
      description: 'A timeless three-piece suit crafted with premium Italian wool. Features a classic fit with modern details, perfect for formal occasions and business meetings.',
    },
    {
      src: '/images/gallery/img2.jpg',
      title: 'Modern Business Casual',
      description: 'Contemporary business casual ensemble combining comfort with style. Tailored for the modern professional who values both appearance and functionality.',
    },
    {
      src: '/images/gallery/img3.jpg',
      title: 'Traditional Wedding Attire',
      description: 'Elegant wedding suit designed with attention to detail. Incorporates traditional elements with contemporary styling for a perfect wedding day look.',
    },
    {
      src: '/images/gallery/img4.jpg',
      title: 'Summer Collection',
      description: 'Lightweight summer suit made from breathable fabrics. Perfect for outdoor events and summer weddings.',
    },
    {
      src: '/images/gallery/img5.jpg',
      title: 'Executive Style',
      description: 'Premium executive suit designed for leadership. Features structured shoulders and a tailored waist for a commanding presence.',
    },
    {
      src: '/images/gallery/img6.jpg',
      title: 'Casual Friday',
      description: 'Smart casual blazer and trouser combination. Versatile enough for both office wear and evening events.',
    },
    {
      src: '/images/gallery/img7.jpg',
      title: 'Evening Wear',
      description: 'Sophisticated evening wear with subtle pattern details. Designed for special occasions and formal evening events.',
    },
    {
      src: '/images/gallery/img8.jpg',
      title: 'Urban Professional',
      description: 'Modern suit with urban styling cues. Perfect for the young professional who wants to make a statement.',
    },
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Gallery Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Gallery</h1>
            <p className="mt-4 text-xl text-gray-600">
              Showcasing Our Finest Creations
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm line-clamp-3">{image.description}</p>
                  <button className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
                    View Design
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Suits', 'Casual Wear', 'Traditional', 'Accessories'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </div>
  );
}
