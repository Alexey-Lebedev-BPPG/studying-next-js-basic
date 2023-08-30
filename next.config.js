/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // добавляем форматы, т.к. avif по ум. не используется
    formats: ["image/avif", "image/webp"],
    // размерность расширений
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    // если мы хотим загружать какие-то изображения из внешнего источника (например ютуб) и оптимизировать их, то добавляем такие настройки
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/*",
      },
    ],
  },
};

module.exports = nextConfig;
