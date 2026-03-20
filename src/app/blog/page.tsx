export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Tips for the Perfect Wedding Day Photos',
      excerpt: 'Learn how to prepare for your wedding photography session to get the best results.',
      date: '2024-03-01',
      author: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'The Art of Portrait Photography',
      excerpt: 'Discover the techniques we use to create stunning portrait images.',
      date: '2024-02-28',
      author: 'Sarah Johnson',
    },
    {
      id: 3,
      title: 'Lighting in Event Photography',
      excerpt: 'Understanding lighting is crucial for capturing great event photos.',
      date: '2024-02-20',
      author: 'Mike Davis',
    },
    {
      id: 4,
      title: 'Behind the Scenes: Our Editing Process',
      excerpt: 'See how we enhance and perfect your photos in post-processing.',
      date: '2024-02-15',
      author: 'Sarah Johnson',
    },
  ];

  return (
    <main className="min-h-screen bg-white py-20 px-4 md:px-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Photography Blog</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Photography tips, insights, and stories from our latest sessions
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="pb-8 border-b border-gray-200 hover:bg-gray-50 -mx-4 px-4 py-4 rounded transition cursor-pointer"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {post.title}
              </h2>
              <div className="flex gap-4 text-sm text-gray-500 mb-4">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>by {post.author}</span>
              </div>
              <p className="text-gray-700 text-lg mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
