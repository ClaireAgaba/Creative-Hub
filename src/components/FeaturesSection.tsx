'use client';

import { FaTape, FaTshirt, FaRegClock } from 'react-icons/fa';

const features = [
  {
    icon: <FaTape className="w-12 h-12" />,
    title: 'Custom Tailoring',
    description:
      'Expert tailors crafting the perfect fit for your unique style and measurements.',
  },
  {
    icon: <FaTshirt className="w-12 h-12" />,
    title: 'Premium Fabrics',
    description:
      'Finest materials sourced from renowned mills worldwide for exceptional quality.',
  },
  {
    icon: <FaRegClock className="w-12 h-12" />,
    title: 'Quick Service',
    description:
      'Efficient service with quick turnaround times without compromising quality.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-2 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-accent mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
