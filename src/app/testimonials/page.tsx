export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & John',
      text: 'The photography team captured our wedding day perfectly. Every moment was beautiful and timeless.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Emily',
      text: 'Professional, creative, and wonderful to work with. My portrait session was an amazing experience.',
      rating: 5,
    },
    {
      id: 3,
      name: 'The Martinez Family',
      text: 'Our family photos turned out absolutely stunning. Highly recommend!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Corporate Events Inc.',
      text: 'Excellent coverage of our company event. The images were perfect for our marketing needs.',
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white py-20 px-4 md:px-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
        <p className="text-gray-600 mb-12 text-lg">
          See what our clients have to say about our work
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-lg italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
