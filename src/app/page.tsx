import Link from "next/link";
import Image from "next/image";
import tourPackagesData from "@/data/tour-packages.json";
import { getFeaturedReviews } from "@/lib/reviews";
import { Review } from "@/lib/supabase";

// Static data for the homepage
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M4.5 9.5a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
    title: "Airport Transfers",
    description:
      "Reliable pickup and drop services from Bandaranaike International Airport",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
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
    title: "Tourist Tours",
    description:
      "Customized day trips and multi-day tours to Sri Lanka's top destinations",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
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
    title: "Private Chauffeur",
    description: "Dedicated driver for your entire Sri Lanka adventure",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Licensed Driver",
    description: "Fully licensed with years of experience",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7V4h16v3M9 20h6M12 4v16" />
      </svg>
    ),
    title: "English-Speaking",
    description: "Clear communication throughout your journey",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Clean & Comfortable",
    description: "Well-maintained, spotless vehicles",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    title: "Affordable Prices",
    description: "Competitive rates with no hidden costs",
  },
];

const vehicles = [
  {
    id: 1,
    name: "Toyota Premio G Superiour 2014",
    image: "/images/vehicle-1.jpg",
    capacity: "4 Passengers",
    ac: "Yes",
    luggage: "3 Suitcases",
    ideal: "Ideal for couples & small families",
  },
  {
    id: 2,
    name: "Honda Vezel Z Grade 2015",
    image: "/images/vehicle-2.jpg",
    capacity: "4 Passengers",
    ac: "Yes",
    luggage: "3 Suitcases",
    ideal: "Perfect for small families & groups",
  },
];

const tourPackages = [
  {
    id: 1,
    name: "Colombo City Tour",
    duration: "1 Day",
    places: [
      "Gangaramaya Temple",
      "National Museum",
      "Galle Face Green",
      "Old Parliament",
    ],
    price: "Contact for price",
  },
  {
    id: 2,
    name: "Kandy & Nuwara Eliya",
    duration: "3 Days",
    places: [
      "Kandy City",
      "Nuwara Eliya",
      "Tea Plantations",
      "Hakgala Gardens",
    ],
    price: "Contact for price",
  },
  {
    id: 3,
    name: "Sigiriya & Dambulla",
    duration: "2 Days",
    places: [
      "Sigiriya Rock",
      "Dambulla Cave Temple",
      "Minneriya National Park",
    ],
    price: "Contact for price",
  },
];

// Merge tour packages with images from JSON
const tourPackagesWithImages = tourPackages.map((pkg) => {
  const imageData = tourPackagesData.tourPackages.find((p) => p.id === pkg.id);
  return { ...pkg, image: imageData?.image || "" };
});

// Static fallback reviews (used when Supabase is not configured)
const staticReviews: Review[] = [
  {
    id: "1",
    name: "John Smith",
    country: "United Kingdom",
    rating: 5,
    text: "Excellent service! Our driver was professional, punctual, and very knowledgeable about Sri Lanka. The car was clean and comfortable. Highly recommend!",
    tour: "7 Days Sri Lanka Tour",
    date: "2024-01-15",
    created_at: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    country: "Australia",
    rating: 5,
    text: "We used this service for our 7-day tour and it was fantastic. The driver knew all the best spots and made our trip unforgettable.",
    tour: "Kandy & Nuwara Eliya",
    date: "2024-01-20",
    created_at: "2024-01-20T10:00:00Z",
  },
  {
    id: "3",
    name: "Michael Brown",
    country: "United States",
    rating: 5,
    text: "Great experience from start to finish. Airport pickup was smooth and the tour was well organized. Will definitely use again!",
    tour: "Sigiriya & Dambulla",
    date: "2024-02-01",
    created_at: "2024-02-01T10:00:00Z",
  },
];

export default async function HomePage() {
  // Fetch reviews from Supabase database
  const reviews = await getFeaturedReviews(3);

  // Use database reviews if available, otherwise fallback to static reviews
  const displayReviews = reviews.length > 0 ? reviews : staticReviews;

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback gradient background if video fails to load */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-700/90" />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow leading-tight">
              Professional Chauffeur Service in Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Safe, comfortable & affordable travel for tourists exploring the
              pearl of the Indian Ocean
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary text-lg px-8 py-4">
                Book Now
              </Link>
              <a
                href="https://wa.me/94771234567"
                className="btn-whatsapp text-lg justify-center px-8 py-4"
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
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            className="opacity-70"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive chauffeur services tailored for your Sri Lanka
              adventure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Experience the difference with our professional chauffeur service
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Vehicles</h2>
            <p className="section-subtitle">
              Clean, comfortable vehicles perfect for your Sri Lanka journey
            </p>
            <Link href="/vehicles" className="btn-secondary inline-block mt-4">
              View All Vehicles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="card overflow-hidden">
                <div className="relative h-64 w-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{vehicle.name}</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                      <span>AC: {vehicle.ac}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>
                  <p className="text-primary-600 font-medium mt-3">
                    {vehicle.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tour Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Popular Tour Packages</h2>
            <p className="section-subtitle">
              Carefully curated tours to explore the best of Sri Lanka
            </p>
            <Link
              href="/tour-packages"
              className="btn-secondary inline-block mt-4"
            >
              View All Packages
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackagesWithImages.map((pkg) => (
              <div key={pkg.id} className="card overflow-hidden">
                <div className="relative h-48 w-full bg-gradient-to-br from-primary-100 to-primary-200">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
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
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="font-medium">{pkg.duration}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{pkg.name}</h3>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {pkg.places.map((place, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                        {place}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gold-500 font-semibold">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Customer Reviews</h2>
            <p className="section-subtitle">
              What our clients say about their experience with us
            </p>
            <Link href="/reviews" className="btn-secondary inline-block mt-4">
              Read All Reviews
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayReviews.map((review) => (
              <div key={review.id} className="card p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={i < review.rating ? "gold" : "none"}
                      stroke="gold"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.country}</p>
                  </div>
                  {review.tour && (
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {review.tour}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book your chauffeur service today and experience the beauty of Sri
            Lanka in comfort
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
            <Link
              href="/book"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
