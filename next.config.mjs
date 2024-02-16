/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/comics",
        destination: "https://warpcast.com/kcpele",
        permanent: false,
      },
      {
        source: "/cloud",
        destination: "https://warpcast.com/kcpele",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
