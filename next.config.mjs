// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'stat5.bollywoodhungama.in',
      'm.media-amazon.com',
      'www.hollywoodreporterindia.com',
      's.saregama.tech',
      'filmfare.wwmindia.com', // Add this domain
    ],
  },
};

export default nextConfig;
