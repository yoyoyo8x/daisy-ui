/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/url/**",
      },
      {
        protocol: "https",
        hostname: "es.123rf.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bakerross.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.com.mx",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.verdementa.es",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "reactnative.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "stylearena.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
