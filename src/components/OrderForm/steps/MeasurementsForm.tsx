'use client';

type MeasurementsFormProps = {
  measurements: {
    size: string;
    quantity: number;
    additionalNotes: string;
  };
  onUpdate: (measurements: {
    size: string;
    quantity: number;
    additionalNotes: string;
  }) => void;
};

export default function MeasurementsForm({ measurements, onUpdate }: MeasurementsFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onUpdate({
      ...measurements,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Size & Quantity</h2>
        <p className="mt-1 text-gray-600">
          Please provide your size details and the quantity you&apos;d like to order.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">
            Size/Measurements *
          </label>
          <select
            id="size"
            name="size"
            value={measurements.size}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            required
          >
            <option value="">Select your size</option>
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
            <option value="XXL">Double XL (XXL)</option>
            <option value="custom">Custom Size (provide details below)</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity *
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={measurements.quantity}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={4}
            value={measurements.additionalNotes}
            onChange={handleChange}
            placeholder="Please provide any specific measurements or special requirements here..."
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          />
          <p className="mt-2 text-sm text-gray-500">
            If you selected &apos;Custom Size&apos;, please provide your detailed measurements here.
          </p>
        </div>
      </div>
    </div>
  );
}
