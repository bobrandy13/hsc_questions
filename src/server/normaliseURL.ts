// function that removes empty spaces from a url
export default function normaliseURL(url: string): string {
  if (url === null || url === "" || url === undefined) return "";
  return url.replace(/\s+/g, "_");
}
