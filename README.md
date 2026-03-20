# collaborators 
Ashlyn 
Ben

# Photography Business Web App

A modern, full-featured web application for advertising a professional photography business. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✅ **Phase 1 (Core Foundation)**
- Modern hero landing page
- Responsive navigation and footer
- Portfolio/Gallery showcase with filtering
- Contact form with email integration
- Professional styling and mobile-responsive design

✅ **Phase 2 (Booking System)**
- Interactive booking form
- Date/time selection
- Service type selection
- Client contact form
- Admin dashboard (planned)

✅ **Phase 3 (Client Features)**
- Client testimonials section with ratings
- About page with team profiles
- Services and packages overview
- SEO optimization

✅ **Phase 4 (Blog & Content)**
- Blog/news section
- Article management
- Author profiles
- Category filtering

## Tech Stack

- **Frontend**: Next.js 14 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: NextAuth.js (optional, for admin features)
- **Database**: PostgreSQL (setup required)
- **Email**: Nodemailer
- **Hosting**: Vercel (recommended)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with nav/footer
│   ├── page.tsx                # Home page
│   ├── portfolio/              # Portfolio gallery
│   ├── booking/                # Booking form
│   ├── testimonials/           # Client testimonials
│   ├── blog/                   # Blog listing
│   ├── about/                  # About page
│   ├── contact/                # Contact form
│   ├── admin/                  # Admin dashboard (future)
│   └── api/                    # API routes
│       ├── contact/            # Contact form API
│       ├── bookings/           # Booking management API
│       └── auth/               # Authentication API
├── components/
│   ├── common/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── portfolio/              # Portfolio components
│   ├── booking/                # Booking components
│   ├── testimonials/           # Testimonial components
│   └── blog/                   # Blog components
└── lib/
    ├── auth/                   # Authentication utilities
    ├── db/                     # Database utilities
    └── email/                  # Email utilities
```

## Getting Started

### Prerequisites
- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ColorsAndMoments
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local` with your actual values

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features & Next Steps

### Current Implementation
- ✅ Responsive home page with hero section
- ✅ Navigation and footer
- ✅ Portfolio gallery page
- ✅ Booking form
- ✅ Testimonials page
- ✅ Blog listing page
- ✅ About page with team profiles
- ✅ Contact form page
- ✅ Contact API endpoint

### To Implement
- [ ] Database setup (PostgreSQL)
- [ ] Email service integration (Nodemailer/SendGrid)
- [ ] Admin authentication (NextAuth.js)
- [ ] Admin dashboard for managing:
  - [ ] Booking calendar and confirmations
  - [ ] Portfolio image upload and management
  - [ ] Testimonials moderation
  - [ ] Blog post management
- [ ] Image optimization (Cloudinary/AWS S3)
- [ ] Payment integration (Stripe)
- [ ] Client authentication and portal
- [ ] SEO and analytics
- [ ] Mobile app (optional, React Native)

## Environment Variables

Create a `.env.local` file with:

```
DATABASE_URL=your_postgresql_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SENDER_EMAIL=your_email@gmail.com
ADMIN_EMAIL=admin@photography.local
```

## Customization

### Colors & Branding
- Edit colors in Tailwind classes (currently using blue/slate color scheme)
- Update the site name in `Navigation.tsx` and `Footer.tsx`
- Replace placeholder images and content

### Content
- Update business information in `app/contact/page.tsx`
- Add real team members in `app/about/page.tsx`
- Add real testimonials in `app/testimonials/page.tsx`
- Update blog posts in the database or static files

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy

### Other Platforms
- Heroku
- AWS Amplify
- Netlify
- Traditional VPS

## Database Setup (PostgreSQL)

```sql
CREATE DATABASE photography_db;

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  date DATE NOT NULL,
  service VARCHAR(100),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  text TEXT,
  rating INT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  content TEXT,
  author VARCHAR(100),
  image_url VARCHAR(255),
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your photography business.

## Support

For questions or issues, please open an issue in the repository or contact the development team.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
