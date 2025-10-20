// src/pages/Gallery.jsx
export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Annual Day 2024",
      description: "A glimpse of our annual celebration filled with joy and performances.",
      image: "/images/gallery1.jpg",
    },
    {
      id: 2,
      title: "Science Exhibition",
      description: "Students showcasing creative science models and experiments.",
      image: "/images/gallery2.jpg",
    },
    {
      id: 3,
      title: "Sports Week",
      description: "Energy, excitement, and teamwork all around!",
      image: "/images/gallery3.jpg",
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-[#002C77] mb-3">Gallery</h1>
        <p className="text-gray-700 text-lg mb-10">
          Explore memorable moments and events at The New Educational Institute.
        </p>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border-t-4 border-[#F5B041] hover:shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-left">
                <h2 className="text-xl font-semibold text-[#002C77] mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
