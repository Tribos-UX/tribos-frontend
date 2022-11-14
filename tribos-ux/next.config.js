module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/deaejawfj/image/upload/**',
      },
    ],
    domains: ['image-optimization-test.vercel.app'],
    // disableStaticImages: true,
  },
  env: {
    CLOUDINARY_CLOUD_NAME: 'deaejawfj',
  },
}
