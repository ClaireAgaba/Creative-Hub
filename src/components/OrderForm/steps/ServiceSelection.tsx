'use client';

import { services } from '@/data/services';

type ServiceSelectionProps = {
  selectedService: string;
  onUpdate: (service: string) => void;
};

export default function ServiceSelection({ selectedService, onUpdate }: ServiceSelectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Select Your Desired Service</h2>
      <p className="text-gray-600">
        Choose the service you&apos;re interested in, and we&apos;ll provide you with a custom quotation.
      </p>
      
      <div className="mt-4">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service *
        </label>
        <select
          id="service"
          value={selectedService}
          onChange={(e) => onUpdate(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {selectedService && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-900">Service Description</h3>
          <p className="mt-2 text-gray-600">
            {services.find((s) => s.title === selectedService)?.description}
          </p>
        </div>
      )}
    </div>
  );
}
