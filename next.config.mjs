/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
