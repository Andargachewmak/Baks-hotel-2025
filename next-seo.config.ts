// next-seo.config.ts
const SEO = {
  titleTemplate: '%s | Baks Hotel',
  defaultTitle: 'Baks Hotel',
  description: 'Stay Your Way at Baks Hotel - Your Premier Destination for Comfort and Luxury',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bakshotel.com/',
    site_name: 'Baks Hotel',
    images: [
      {
        url: 'https://bakshotel.com/images/baks/bakshotel.svg', // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: 'Baks Hotel - Exterior View',
      },
    ],
  },
 
};

export default SEO;
