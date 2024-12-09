import OrderForm from '@/components/OrderForm/OrderForm';

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Request a Quotation</h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below to get a custom quotation for your order.
          </p>
        </div>

        <OrderForm />
      </div>
    </div>
  );
}
