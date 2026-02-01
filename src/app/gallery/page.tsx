export const metadata = {
  title: "Gallery | Professional Chauffeur Service Sri Lanka",
  description:
    "View our gallery featuring our vehicles, tourist destinations, and memorable tour moments in Sri Lanka.",
};

const galleryItems = [
  { id: 1, category: "cars", title: "Toyota Prius", location: "Colombo" },
  {
    id: 2,
    category: "places",
    title: "Sigiriya Rock",
    location: "Cultural Triangle",
  },
  {
    id: 3,
    category: "tours",
    title: "Tea Plantations",
    location: "Nuwara Eliya",
  },
  {
    id: 4,
    category: "places",
    title: "Galle Fort",
    location: "Southern Coast",
  },
  { id: 5, category: "cars", title: "Toyota Corolla", location: "Colombo" },
  { id: 6, category: "tours", title: "Whale Watching", location: "Mirissa" },
  { id: 7, category: "places", title: "Nine Arch Bridge", location: "Ella" },
  { id: 8, category: "tours", title: "Safari Tour", location: "Yala" },
  {
    id: 9,
    category: "places",
    title: "Dambulla Cave Temple",
    location: "Dambulla",
  },
  {
    id: 10,
    category: "tours",
    title: "Temple of the Tooth",
    location: "Kandy",
  },
  {
    id: 11,
    category: "places",
    title: "Adam's Peak",
    location: "Central Highlands",
  },
  {
    id: 12,
    category: "tours",
    title: "Village Experience",
    location: "Sigiriya",
  },
];

export default function GalleryPage() {
  const categories = ["all", "cars", "places", "tours"];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore the beauty of Sri Lanka through our lens
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === "all"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400 mx-auto mb-2"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <p className="text-gray-500 font-medium">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.location}</p>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-sm">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="section-subtitle">
              Some of the beautiful places we visit on our tours
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Sigiriya", image: "sigiriya" },
              { name: "Nuwara Eliya", image: "nuwara-eliya" },
              { name: "Galle", image: "galle" },
              { name: "Ella", image: "ella" },
              { name: "Kandy", image: "kandy" },
              { name: "Mirissa", image: "mirissa" },
              { name: "Dambulla", image: "dambulla" },
              { name: "Trincomalee", image: "trinco" },
            ].map((dest, index) => (
              <div
                key={index}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="h-32 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-600"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-sm">{dest.name}</p>
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
            Join Us on an Adventure
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book your tour today and create your own memorable moments
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
              Book a Tour
            </a>
            <a
              href="/tour-packages"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
