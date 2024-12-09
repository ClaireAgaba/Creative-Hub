'use client';

import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ServiceSelection from './steps/ServiceSelection';
import MeasurementsForm from './steps/MeasurementsForm';
import ClientDetails from './steps/ClientDetails';
import OrderReview from './steps/OrderReview';

export type OrderFormData = {
  // Step 1: Service Selection
  selectedService: string;
  // Step 2: Measurements
  measurements: {
    size: string;
    quantity: number;
    additionalNotes: string;
  };
  // Step 3: Client Details
  clientDetails: {
    name: string;
    email: string;
    phone: string;
    country: string;
  };
};

const initialFormData: OrderFormData = {
  selectedService: '',
  measurements: {
    size: '',
    quantity: 1,
    additionalNotes: '',
  },
  clientDetails: {
    name: '',
    email: '',
    phone: '',
    country: '',
  },
};

export default function OrderForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);

  const updateFormData = (stepData: Partial<OrderFormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...stepData,
    }));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here we'll implement the email notification logic
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      // Reset form after successful submission
      setFormData(initialFormData);
      setStep(1);
      alert('Your quotation request has been submitted successfully! We will contact you via email shortly.');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ServiceSelection
            selectedService={formData.selectedService}
            onUpdate={(data) => updateFormData({ selectedService: data })}
          />
        );
      case 2:
        return (
          <MeasurementsForm
            measurements={formData.measurements}
            onUpdate={(data) => updateFormData({ measurements: data })}
          />
        );
      case 3:
        return (
          <ClientDetails
            clientDetails={formData.clientDetails}
            onUpdate={(data) => updateFormData({ clientDetails: data })}
          />
        );
      case 4:
        return <OrderReview formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {['Select Service', 'Measurements', 'Your Details', 'Review'].map((label, index) => (
            <div
              key={label}
              className={`flex items-center ${index < 3 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step > index + 1
                    ? 'bg-green-500 text-white'
                    : step === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </div>
              {index < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ml-auto"
            >
              Next
              <FaArrowRight className="ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 ml-auto"
            >
              Request Quotation
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
