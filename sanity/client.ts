import { createClient } from "next-sanity";
import { type SanityDocument } from "next-sanity";

const HOMEPAGE_QUERY = `*[_type == "homepage"][0]`

const client = createClient({
  projectId: "60w5y6gq",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});

export const getHomepageData = () => {
 return client.fetch<SanityDocument>(HOMEPAGE_QUERY, {}, { next: { revalidate: 30 } });
}