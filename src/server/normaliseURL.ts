// function that removes empty spaces from a url
export default function normaliseURL(url: string): string {
  return url.replace(/\s+/g, "_");
}
