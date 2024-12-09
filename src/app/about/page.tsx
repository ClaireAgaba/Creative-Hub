import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About The Creative Hub Ug
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Your premier destination for bespoke menswear and tailoring excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/display.jpeg"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Creative Hub Ug was founded with a vision to revolutionize men&apos;s fashion in Uganda. 
                We believe that every man deserves to experience the confidence that comes with wearing 
                perfectly tailored clothing.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple mission: to provide exceptional quality menswear 
                combined with unparalleled customer service. Today, we&apos;re proud to be one of the 
                leading destinations for men&apos;s fashion in Kampala.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-accent">5+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-accent">50+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We use only the finest materials and employ skilled craftsmen to ensure exceptional quality in every piece.',
              },
              {
                title: 'Innovation',
                description: 'Constantly updating our styles and techniques to stay ahead of fashion trends while maintaining timeless elegance.',
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We work closely with each client to understand and meet their unique needs.',
              },
            ].map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: 'Asasira Arnold',
                role: 'Managing Director',
                image: '/images/dona.jpeg',
              },
              {
                name: 'Canary',
                role: 'Design Consultant',
                image: '/images/Canary.PNG',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
