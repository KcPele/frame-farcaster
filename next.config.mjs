/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/comics",
        destination: "https://ultrafantasycomics.wixsite.com/ufanstudioo",
        permanent: false,
      },
      {
        source: "/cloud",
        destination: "https://ultrafantasycomics.wixsite.com/ufanstudioo",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
