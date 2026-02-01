export const metadata = {
  title: "Our Vehicles | Professional Chauffeur Service Sri Lanka",
  description:
    "View our fleet of clean, comfortable vehicles perfect for your Sri Lanka tour. Toyota Prius and Toyota Corolla available.",
};

const vehicles = [
  {
    id: 1,
    name: "Toyota Prius",
    model: "Toyota Prius 2018",
    image: "/images/vehicle-1.jpg",
    capacity: "4 Passengers",
    ac: "Yes (Dual Zone)",
    luggage: "2 Large Suitcases + 2 Small Bags",
    features: ["Hybrid Engine", "Fuel Efficient", "Smooth Ride", "Low Noise"],
    ideal: "Ideal for couples & small families",
    safety:
      "Full insurance coverage, regular maintenance, safety features including ABS, EBD, and airbags",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    model: "Toyota Corolla 2020",
    image: "/images/vehicle-2.jpg",
    capacity: "4 Passengers",
    ac: "Yes (Dual Zone)",
    luggage: "3 Large Suitcases + 2 Small Bags",
    features: [
      "Petrol Engine",
      "Spacious Interior",
      "High Ground Clearance",
      "Reliable",
    ],
    ideal: "Perfect for small families & groups",
    safety:
      "Full insurance coverage, regular maintenance, safety features including ABS, EBD, airbags, and reverse camera",
  },
];

export default function VehiclesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vehicles</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Clean, comfortable, and well-maintained vehicles for your Sri Lanka
            adventure
          </p>
        </div>
      </section>

      {/* Vehicles List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.id} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Vehicle Image */}
                  <div className="h-80 lg:h-auto bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400 mb-4"
                      >
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                      </svg>
                      <p className="text-gray-500 font-medium">
                        {vehicle.name}
                      </p>
                      <p className="text-sm text-gray-400">{vehicle.model}</p>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {vehicle.name}
                    </h2>
                    <p className="text-primary-600 font-medium mb-4">
                      {vehicle.ideal}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <span className="font-medium">Capacity</span>
                        </div>
                        <p className="text-gray-600">{vehicle.capacity}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <path d="M22 6l-10 7L2 6" />
                          </svg>
                          <span className="font-medium">Air Conditioning</span>
                        </div>
                        <p className="text-gray-600">{vehicle.ac}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                          </svg>
                          <span className="font-medium">Luggage Capacity</span>
                        </div>
                        <p className="text-gray-600">{vehicle.luggage}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Vehicle Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, i) => (
                          <span
                            key={i}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="green"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                        <div>
                          <p className="font-medium text-green-700">
                            Safety & Insurance
                          </p>
                          <p className="text-sm text-green-600">
                            {vehicle.safety}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Book Your Vehicle?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us now to check availability and get a quote for your Sri
            Lanka journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94771234567"
              className="btn-whatsapp text-lg justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a href="/contact" className="btn-primary">
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
