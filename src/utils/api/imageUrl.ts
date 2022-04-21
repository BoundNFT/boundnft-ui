export default function imageUrl(url: string | undefined) {
  if (!url) return '/assets/images/no-image.png'
  return `/api/image?url=${url}`
}
