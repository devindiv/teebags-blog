import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2024-04-02",
  dataset: "production",
  projectId: "6ildlbko",
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
