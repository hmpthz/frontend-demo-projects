import fs from 'fs';
import path from 'path';
import { ImageMetadata as Metadata } from '../src/types';

const rootDir = path.resolve(import.meta.dirname, '..');
const envPath = path.resolve(rootDir, '..', '..', 'env.local.json');
const metadataPath = path.resolve(rootDir, 'public', 'images-metadata.json');
const imagesDir = path.resolve(rootDir, 'public', 'images');

const PER_PAGE = 40;
const TOTAL_PAGES = 5;

function loadApiKey() {
  let key = process.env.PEXELS_API_KEY;
  if (key) return key;

  if (!fs.existsSync(envPath)) {
    throw new Error(`Missing PEXELS_API_KEY env var and ${envPath}`);
  }
  const env = JSON.parse(fs.readFileSync(envPath, 'utf8')) as Record<string, string>;
  key = env.PEXELS_API_KEY;
  if (!key) {
    throw new Error(`PEXELS_API_KEY not set in ${envPath}`);
  }
  return key;
}

const API_KEY = loadApiKey();

async function main(option: 'metadata' | 'images') {
  if (option === 'metadata') {
    const metadata = await fetchMetadata();
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    console.log(`Saved metadata to ${metadataPath}`);
  } else {
    let metadata: Metadata[] = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    await fs.promises.mkdir(imagesDir, { recursive: true });
    for (let index = 0; index < metadata.length; index++) {
      // eslint-disable-next-line no-await-in-loop
      await downloadImage(metadata[index], index, metadata.length);
    }
  }
}

async function fetchMetadata(page?: number): Promise<Metadata[]> {
  if (page === undefined) {
    const metadata: Metadata[] = [];
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      const data = await fetchMetadata(i);
      metadata.push(...data);
    }
    return metadata;
  }

  type PexelsPhoto = {
    id: number;
    width: number;
    height: number;
    alt: string | null;
    photographer: string;
    src: {
      original: string;
      large2x?: string;
      large?: string;
      medium?: string;
    };
  };

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

  const payload = (await response.json()) as { photos: PexelsPhoto[] };

  return payload.photos.map<Metadata>((photo) => {
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
  });
}

async function downloadImage(item: Metadata, index: number, total: number) {
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

function getExtension(url: string) {
  return path.extname(new URL(url).pathname) || '.jpg';
}

// Toggle which step to run by changing the argument.
main('images').catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
