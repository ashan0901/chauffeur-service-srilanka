export const metadata = {
  title: "Services | Professional Chauffeur Service Sri Lanka",
  description:
    "Explore our comprehensive chauffeur services including airport transfers, tourist tours, hotel transfers, and private chauffeur services.",
};

const services = [
  {
    id: 1,
    title: "Airport Pickup & Drop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    description:
      "Reliable airport transfer services from Bandaranaike International Airport (BIA) and other airports in Sri Lanka.",
    features: [
      "Flight tracking for on-time pickup",
      "Meet & greet service at arrival gate",
      "Help with luggage",
      "Flight delay handling",
      "24/7 availability",
    ],
    locations: [
      "Bandaranaike International Airport (CMB)",
      "Mattala Rajapaksa International Airport (HRI",
      "Colombo Airport Transfers",
    ],
  },
  {
    id: 2,
    title: "Tourist Tours",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    description:
      "Customized day trips and multi-day tours to Sri Lanka's most beautiful destinations and hidden gems.",
    features: [
      "Flexible itineraries",
      "Expert local guidance",
      "Comfortable stops at scenic locations",
      "Restaurant recommendations",
      "Photography opportunities",
    ],
    locations: [
      "Sigiriya & Dambulla",
      "Kandy & Nuwara Eliya",
      "Galle & Mirissa",
      "Colombo City Tour",
      "Udawalawe Safari",
    ],
  },
  {
    id: 3,
    title: "Hotel Transfers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    description:
      "Comfortable transfers between hotels, resorts, and accommodation properties across Sri Lanka.",
    features: [
      "Door-to-door service",
      "Assistance with luggage",
      "Professional & punctual drivers",
      "Clean & comfortable vehicles",
      "Flexible pickup times",
    ],
    locations: [
      "All Colombo Hotels",
      "Hill Country Resorts",
      "Beachfront Hotels",
      "Cultural Triangle Accommodations",
    ],
  },
  {
    id: 4,
    title: "Long-distance Travel",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    description:
      "Safe and comfortable long-distance travel for your Sri Lanka adventures.",
    features: [
      "Experienced driver familiar with Sri Lankan roads",
      "Comfortable breaks at scenic spots",
      "Flexible scheduling",
      "Competitive pricing",
      "Door-to-door service",
    ],
    locations: [
      "Colombo to Ella",
      "Kandy to Sigiriya",
      "Galle to Trincomalee",
      "Any destination in Sri Lanka",
    ],
  },
  {
    id: 5,
    title: "Private Chauffeur (Daily)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    description:
      "Dedicated private chauffeur for your daily travel needs during your Sri Lanka vacation.",
    features: [
      "Personal driver throughout your trip",
      "Flexible daily schedule",
      "Local expertise & recommendations",
      "Convenient hotel pickup & drop-off",
      "English-speaking driver",
    ],
    locations: [
      "Available island-wide",
      "Perfect for extended stays",
      "Customizable daily routes",
    ],
  },
  {
    id: 6,
    title: "Private Chauffeur (Weekly)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    description:
      "Complete week-long chauffeur service for an immersive Sri Lanka experience.",
    features: [
      "Full-week dedicated driver",
      "Customized weekly itinerary",
      "Best local experiences included",
      "Cost-effective package pricing",
      "24/7 availability",
    ],
    locations: [
      "7-day Sri Lanka explorer",
      "10-day comprehensive tour",
      "Custom weekly packages",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive chauffeur services tailored for your perfect Sri Lanka
            journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card overflow-hidden">
                <div className="bg-primary-600 p-6 text-white flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-gray-900 mb-2">
                      Popular Destinations:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {service.locations.slice(0, 3).map((loc, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0ea5e9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 12l2 2 4-4" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Service Area</h2>
            <p className="section-subtitle">
              We provide services throughout Sri Lanka
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Colombo Region</h3>
                <p className="text-sm text-gray-500">Airport & City</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Cultural Triangle</h3>
                <p className="text-sm text-gray-500">
                  Anuradhapura, Polonnaruwa
                </p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Hill Country</h3>
                <p className="text-sm text-gray-500">Kandy, Nuwara Eliya</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Southern Coast</h3>
                <p className="text-sm text-gray-500">Galle, Mirissa</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Eastern Coast</h3>
                <p className="text-sm text-gray-500">Trincomalee, Arugam Bay</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Wildlife Parks</h3>
                <p className="text-sm text-gray-500">Yala, Udawalawe</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Northern Region</h3>
                <p className="text-sm text-gray-500">Jaffna</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-medium">Anywhere Else</h3>
                <p className="text-sm text-gray-500">Just ask!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Chauffeur Service
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today to plan your perfect Sri Lanka journey
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
            <a
              href="/contact"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
