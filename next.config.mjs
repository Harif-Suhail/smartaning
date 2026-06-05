/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/lakeside-terrace",
        destination: "/projects/aldwark-manor-hotel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
