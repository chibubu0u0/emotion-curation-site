import imageUrlBuilder from "@sanity/image-url";
import { client } from "./content";

const builder = imageUrlBuilder(client);

export function imageUrl(source) {
  if (!source) return null;
  return builder.image(source);
}
