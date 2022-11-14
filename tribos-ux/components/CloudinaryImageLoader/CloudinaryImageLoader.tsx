const normalizeSrc = (src) => (src[0] === '/' ? src.slice(1) : src)

export function cloudinaryLoader({ src, width, quality }) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
  return `https://res.cloudinary.com/${
    process.env.CLOUDINARY_CLOUD_NAME
  }/image/upload/${params.join(',')}/${normalizeSrc(src)}`
}
