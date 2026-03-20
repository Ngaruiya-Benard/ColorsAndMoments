export default function Portfolio() {
  const categories = ['Weddings', 'Portraits', 'Events', 'Commercial'];
  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Photo ${i + 1}`,
    category: categories[i % categories.length],
  }));

  return (
    <main className="min-h-screen bg-white py-20 px-4 md:px-8">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Explore our collection of beautiful moments we've captured
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-12 flex-wrap">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square rounded-lg bg-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer group"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition">
                {photo.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
