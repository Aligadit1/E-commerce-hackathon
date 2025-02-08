const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: "gswn7zei", // 🔹 Replace with your Sanity project ID
  dataset: "production", // 🔹 Change if using a different dataset
  useCdn: false, // 🔹 Disable caching to get real-time updates
  token: "skaxByfzfr8yo1QVSPC8htU4SazrHQN6PJxlPJRPB7zHeMtjnhoR5zN9NRWSVLUHXHkm909LLMMvwyHEErbRoLr4585HQjsYUIYD7nolmb5L03BZXcW6OlMbJPWWrt6iYeI0DJRf9N3ZVBuJwP2SLjUGzfNwQFc4RKcLwaJnRrFvQW1bJdQz", // 🔹 Replace with an API token with write access
});

async function updateEmptySlugs() {
  try {
    // Fetch documents where slug is either missing or empty
    const documents = await client.fetch(
      '*[_type == "products" && ( !defined(slug) || slug.current == "" )]'
    );

    if (documents.length === 0) {
      console.log("✅ All documents already have valid slugs!");
      return;
    }

    for (const doc of documents) {
      if (!doc.title) {
        console.warn(`⚠️ Skipping document ${doc._id} because it has no title.`);
        continue;
      }

      const newSlug = doc.title
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, "") // Remove special characters
        .slice(0, 96); // Limit slug length to 96 chars

      await client.patch(doc._id)
        .set({ slug: { _type: "slug", current: newSlug } }) // Update the slug field
        .commit();

      console.log(`✅ Updated: ${doc.title} → ${newSlug}`);
    }

    console.log("🎉 Slugs successfully updated for all missing/empty values!");
  } catch (error) {
    console.error("❌ Error updating slugs:", error);
  }
}

updateEmptySlugs()