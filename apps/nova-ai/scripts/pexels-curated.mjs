import fs from 'fs';
import path from 'path';

/**
 * @typedef {import('../src/types').ImageMetadata} Metadata
 * @typedef {'metadata' | 'images'} ScriptOption
 */

const rootDir = path.resolve(import.meta.dirname, '..');
const envPath = path.resolve(rootDir, '..', '..', 'env.local.json');
const metadataPath = path.resolve(rootDir, 'public', 'images-metadata.json');
const imagesDir = path.resolve(rootDir, 'public', 'images');

const PER_PAGE = 40;
const TOTAL_PAGES = 5;

/**
 * Load the Pexels API key from environment or local env file.
 * @returns {string}
 */
function loadApiKey() {
  /** @type {string | undefined} */
  let key = process.env.PEXELS_API_KEY;
  if (key) return key;

  if (!fs.existsSync(envPath)) {
    throw new Error(`Missing PEXELS_API_KEY env var and ${envPath}`);
  }

  /** @type {Record<string, string>} */
  const env = JSON.parse(fs.readFileSync(envPath, 'utf8'));
  key = env.PEXELS_API_KEY;

  if (!key) {
    throw new Error(`PEXELS_API_KEY not set in ${envPath}`);
  }

  return key;
}

const API_KEY = loadApiKey();

/**
 * Main entry point.
 * @param {ScriptOption} option
 * @returns {Promise<void>}
 */
async function main(option) {
  if (option === 'metadata') {
    const metadata = await fetchMetadata();
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    console.log(`Saved metadata to ${metadataPath}`);
  } else {
    const CHUNK_SIZE = 5;

    /** @type {Metadata[]} */
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    await fs.promises.mkdir(imagesDir, { recursive: true });

    for (let start = 0; start < metadata.length; start += CHUNK_SIZE) {
      const end = Math.min(start + CHUNK_SIZE, metadata.length);
      const chunk = metadata.slice(start, end);

      // Download up to CHUNK_SIZE images concurrently.
      // eslint-disable-next-line no-await-in-loop
      await Promise.all(
        chunk.map((item, offset) =>
          downloadImage(item, start + offset, metadata.length)
        )
      );
    }
  }
}

/**
 * Fetch curated Pexels metadata.
 * When `page` is omitted, fetches all pages up to TOTAL_PAGES.
 * @param {number} [page]
 * @returns {Promise<Metadata[]>}
 */
async function fetchMetadata(page) {
  if (page === undefined) {
    /** @type {Metadata[]} */
    const metadata = [];
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      // eslint-disable-next-line no-await-in-loop
      const data = await fetchMetadata(i);
      metadata.push(...data);
    }
    return metadata;
  }

  /**
   * @typedef {Object} PexelsPhoto
   * @property {number} id
   * @property {number} width
   * @property {number} height
   * @property {string | null} alt
   * @property {string} photographer
   * @property {{ original: string; large2x?: string; large?: string; medium?: string }} src
   */

  console.log(`Fetching Pexels curated photos for page ${page}...`);
  const response = await fetch(
    `https://api.pexels.com/v1/curated?page=${page}&per_page=${PER_PAGE}`,
    {
      headers: { Authorization: API_KEY },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch curated photos: ${response.status} ${response.statusText}`);
  }

  /** @type {{ photos: PexelsPhoto[] }} */
  const payload = await response.json();

  return payload.photos.map(
    /** @returns {Metadata} */
    (photo) => {
      const url = photo.src.large ?? photo.src.medium ?? photo.src.large2x ?? photo.src.original;
      const extension = getExtension(url);
      const localUrl = `./images/${photo.id}${extension}`;

      return {
        id: photo.id.toString(),
        url,
        localUrl,
        width: photo.width,
        height: photo.height,
        alt: photo.alt ?? `Photo by ${photo.photographer}`,
      };
    }
  );
}

/**
 * Download a single image to the local images directory.
 * @param {Metadata} item
 * @param {number} index
 * @param {number} total
 * @returns {Promise<void>}
 */
async function downloadImage(item, index, total) {
  const extension = getExtension(item.url);
  const filename = `${item.id}${extension}`;
  const filepath = path.join(imagesDir, filename);

  if (fs.existsSync(filepath)) {
    console.log(`Skipping existing ${filename}`);
    return;
  }

  const response = await fetch(item.url, { headers: { Authorization: API_KEY } });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${item.url}: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.promises.writeFile(filepath, buffer);
  console.log(`[${index + 1}/${total}] Saved ${filename}`);
}

/**
 * Get the extension from an image URL, defaulting to `.jpg`.
 * @param {string} url
 * @returns {string}
 */
function getExtension(url) {
  return path.extname(new URL(url).pathname) || '.jpg';
}

/**
 * Read the script option from process arguments.
 * Usage: `node pexels-curated.mjs [metadata|images]`
 * @param {ScriptOption} defaultOption
 * @returns {ScriptOption}
 */
function parseArgs(defaultOption) {
  const arg = process.argv[2] ?? defaultOption;
  if (arg === 'metadata' || arg === 'images') {
    return arg;
  }
  console.warn(`Use default option "${defaultOption}".`);
  return defaultOption;
}

// Toggle which step to run using a CLI argument: `metadata` or `images`.
// Example: `node pexels-curated.mjs metadata`
main(parseArgs('images')).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
