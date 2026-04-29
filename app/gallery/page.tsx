"use client";

const images = [
  {
    id: "1",
    title: "Republic Day Parade",
    url: "https://via.placeholder.com/400",
  },
  {
    id: "2",
    title: "Camp Training",
    url: "https://via.placeholder.com/400",
  },
];

export default function GalleryPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Gallery
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Photos from events and activities
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-3">
              <p className="text-sm font-medium text-gray-900">
                {img.title}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}