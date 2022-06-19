// import { getStrapiURL } from "./api";

// export function getStrapiMedia(media) {
//   const { url } = media;
//   const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
//   return imageUrl;
// }

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? 'https://cms.janinezielman.com' + media.url
    : media.url;
  return imageUrl;
}