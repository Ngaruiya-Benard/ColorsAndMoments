export default function About() {
  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Lead Photographer',
      bio: 'Specializing in weddings and portrait photography with 8+ years of experience.',
    },
    {
      id: 2,
      name: 'Mike Davis',
      role: 'Event Photographer',
      bio: 'Expert in capturing dynamic moments at corporate events and celebrations.',
    },
    {
      id: 3,
      name: 'Lisa Chen',
      role: 'Photographer & Editor',
      bio: 'Creates polished, professional images with meticulous attention to detail.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* About Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Our Studio</h1>
          <p className="text-xl text-gray-300">
            We're passionate about capturing the moments that matter most to you.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Founded in 2016, our photography studio has been dedicated to capturing
              life's most precious moments with creativity and professionalism.
            </p>
            <p>
              We believe that every person has a unique story, and our mission is to
              tell those stories through beautiful, authentic photography.
            </p>
            <p>
              From intimate portraits to grand celebrations, we approach every project
              with the same level of passion, attention to detail, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.id} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <div className="aspect-square rounded-lg bg-gray-300 mb-6" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Excellence', desc: 'We strive for the highest quality in every project.' },
              { title: 'Authenticity', desc: 'We capture genuine moments, not posed perfection.' },
              { title: 'Passion', desc: 'We love what we do and it shows in our work.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
