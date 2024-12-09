'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-padding bg-accent text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="heading-2 mb-6">Ready to Transform Your Wardrobe?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our store or book an appointment for a personalized consultation with our expert tailors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="btn-primary bg-white text-accent hover:bg-gray-100">
              View Collection
            </Link>
            <Link href="/contact" className="btn-primary border-2 border-white hover:bg-white hover:text-accent">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
