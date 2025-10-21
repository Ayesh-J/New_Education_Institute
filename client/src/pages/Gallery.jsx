import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // icons

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/gallery");
        if (!res.ok) throw new Error("Failed to fetch gallery");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Failed to load gallery:", err);
      }
    };
    fetchGallery();
  }, []);

  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : images.length - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section className="bg-[#f4f4f4] pt-[100px] px-6 pb-16 min-h-[calc(100vh-80px)] overflow-auto">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-[#002C77] mb-3">Gallery</h1>
        <p className="text-gray-700 text-lg mb-10">
          Capturing beautiful moments from The New Educational Institute.
        </p>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.length === 0 ? (
            <p className="text-gray-500 col-span-full">No images to display yet.</p>
          ) : (
            images.map((img) => (
              <div
                key={img._id}
                className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => handleOpen(images.indexOf(img))}
              >
                <img
                  src={img.image}
                  alt={img.title || "Gallery Image"}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Title section */}
                {img.title && (
                  <div className="p-4 bg-white text-center border-t">
                    <h3 className="text-lg font-semibold text-[#002C77]">
                      {img.title}
                    </h3>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-auto p-4"
          onClick={handleClose}
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition"
            >
              <ChevronLeft size={40} />
            </button>

            <img
              src={images[selectedIndex].image}
              alt={images[selectedIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mx-auto"
            />

            <button
              onClick={handleNext}
              className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition"
            >
              <ChevronRight size={40} />
            </button>

            {images[selectedIndex].title && (
              <p className="text-white text-center mt-4 text-lg font-medium">
                {images[selectedIndex].title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
