export const getImagePath = (path: string) => {
  return `/portfolio${path.startsWith('/') ? path : `/${path}`}`
} 