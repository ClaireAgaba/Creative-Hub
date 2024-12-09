'use client';

import { OrderFormData } from '../OrderForm';

type OrderReviewProps = {
  formData: OrderFormData;
};

export default function OrderReview({ formData }: OrderReviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Review Your Order</h2>
        <p className="mt-1 text-gray-600">
          Please review your order details before requesting a quotation.
        </p>
      </div>

      <div className="space-y-6">
        {/* Service Details */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Service Details</h3>
          <p className="text-gray-600">
            <span className="font-medium">Selected Service:</span> {formData.selectedService}
          </p>
        </div>

        {/* Measurements & Quantity */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Size & Quantity</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Size:</span> {formData.measurements.size}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Quantity:</span> {formData.measurements.quantity}
            </p>
            {formData.measurements.additionalNotes && (
              <div>
                <p className="font-medium text-gray-600">Additional Notes:</p>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {formData.measurements.additionalNotes}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Client Details */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your Details</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Name:</span> {formData.clientDetails.name}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {formData.clientDetails.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> {formData.clientDetails.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Country:</span> {formData.clientDetails.country}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-500">
          By clicking &quot;Request Quotation&quot;, you agree to receive email communications regarding
          your order. We will respond to your request within 24-48 business hours.
        </p>
      </div>
    </div>
  );
}
