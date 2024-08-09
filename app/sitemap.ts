import type { MetadataRoute } from "next";
import { HOST_URL } from "../utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${HOST_URL}/`,
      lastModified: new Date().toLocaleString(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
