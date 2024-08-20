/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hhbecrmskjgxpqbtsazu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins/**",
      },
    ],
  },
};

export default nextConfig;
