import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Sergei | Blog",
    description: "My journey learning Astro",
    site: "https://astro-blog-tutorial-nu.vercel.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
