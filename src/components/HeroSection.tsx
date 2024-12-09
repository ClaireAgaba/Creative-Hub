'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/bg1.jpeg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to The Creative Hub Ug
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience premium menswear and expert tailoring services for the modern gentleman
          </p>
          <Link href="/contact" className="btn-primary">
            Make an Order
          </Link>
        </div>
      </div>
    </section>
  );
}
