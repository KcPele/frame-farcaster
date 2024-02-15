/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/comics",
        destination: "https://cosmiccowboys.cloud",
        permanent: false,
      },
      {
        source: "/cloud",
        destination:
          "https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
