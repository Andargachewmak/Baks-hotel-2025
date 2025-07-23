'use client';

import { NextSeo } from 'next-seo';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Cook from '@/components/Home/Cook';
import Gallery from '@/components/Home/Gallery';
import Room from '@/components/Home/Room/room';
import ContactUs from '@/components/Home/ContactUs/contactus';
import WhyChooseUs from '@/components/Home/choose/chooseus';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Welcome to Baks Hotel"
        description="Stay Your Way at Baks Hotel - Your Premier Destination for Comfort and Luxury"
        canonical="https://bakshotel.com/"
        openGraph={{
          url: 'https://bakshotel.com/',
          title: 'Welcome to Baks Hotel',
          description:
            'Stay Your Way at Baks Hotel - Your Premier Destination for Comfort and Luxury',
          images: [
            {
              url: 'https://bakshotel.com/images/og-image.jpg', // ✅ Prefer JPG or PNG for OG image
              width: 1200,
              height: 630,
              alt: 'Baks Hotel - Exterior View',
            },
          ],
          site_name: 'Baks Hotel',
        }}
      />

      <main>
        <Hero />
        <Cook />
        <Services />
        <Room />
        <WhyChooseUs />
        <Gallery />
        <ContactUs />
      </main>
    </>
  );
}
