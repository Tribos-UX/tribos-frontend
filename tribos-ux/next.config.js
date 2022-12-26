module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/deaejawfj/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'yhbuplonzahlsultwpdb.supabase.co',
        pathname: '/storage/**',
      },
    ],
    domains: ['image-optimization-test.vercel.app'],
    // disableStaticImages: true,
  },
  env: {
    CLOUDINARY_CLOUD_NAME: 'deaejawfj',
  },
}
