export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-20 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          Capturing Your Moments
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-gray-300 md:text-xl">
          Professional photography for weddings, portraits, events, and more.
          Let us tell your story through our lens.
        </p>
        <div className="flex gap-4">
          <a
            href="/portfolio"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700 transition"
          >
            View Portfolio
          </a>
          <a
            href="/booking"
            className="rounded-lg border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-slate-900 transition"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section className="px-4 py-20 md:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Featured Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-gray-200 flex items-center justify-center text-gray-400"
            >
              <span>Photo {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 px-4 py-16 text-center text-white md:px-8">
        <h3 className="mb-4 text-3xl font-bold">Ready to book?</h3>
        <p className="mb-8 text-lg">Contact us today to discuss your photography needs.</p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
