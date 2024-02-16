/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/comics",
        destination: "https://kcpele.vercel.app",
        permanent: false,
      },
      {
        source: "/cloud",
        destination: "https://kcpele.vercel.app",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
