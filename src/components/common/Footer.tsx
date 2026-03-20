import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4">PhotoStudio</h3>
          <p className="text-gray-400">
            Capturing your most precious moments with creativity and passion.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Weddings</li>
            <li>Portraits</li>
            <li>Events</li>
            <li>Commercial</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <p className="text-gray-400 mb-4">
            Email: info@photostudio.local
            <br />
            Phone: (555) 123-4567
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2024 PhotoStudio. All rights reserved.</p>
      </div>
    </footer>
  );
}
