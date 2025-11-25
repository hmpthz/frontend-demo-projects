import fs from 'fs';
import path from 'path';
import { ImageMetadata as Metadata } from '../src/types';

const rootDir = path.resolve(import.meta.dirname, '..');
const metadataPath = path.resolve(rootDir, 'public', 'images-metadata.json');
const imagesDir = path.resolve(rootDir, 'public', 'images');

async function main(option: 'metadata' | 'images') {
  if (option === 'metadata') {
    const metadata = await fetchMetadata();
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    console.log(`Saved metadata to ${metadataPath}`);
  } else {
    let metadata: Metadata[] = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    metadata = metadata.slice(0, 20);
    await fs.promises.mkdir(imagesDir, { recursive: true });
    for (let index = 0; index < metadata.length; index++) {
      // eslint-disable-next-line no-await-in-loop
      await downloadImage(metadata[index], index);
    }
  }
}

async function fetchMetadata(page?: number) {
  if (page === undefined) {
    const metadata: Metadata[] = [];
    for (let i = 0; i <= 3; i++) {
      const data = await fetchMetadata(i);
      metadata.push(...data);
    }
    return metadata;
  }

  type ResponseItem = {
    id: string;
    type: string;
    width: number;
    height: number;
    prompt: {
      decodedPrompt: {
        content: string;
        weight: number;
      }[];
    };
  };

  console.log(`Fetching midjourney explore metadata for page ${page}...`);
  const response = fs.readFileSync(path.resolve(rootDir, 'scripts', `page${page}.json`), 'utf8');

  const items: ResponseItem[] = JSON.parse(response);
  const metadata = items.map<Metadata>((item) => ({
    id: item.id,
    url: `https://cdn.midjourney.com/video/${item.id}/0_640_N.webp`,
    width: item.width,
    height: item.height,
    prompt: item.prompt.decodedPrompt[0]?.content,
  }));
  return metadata;
}

async function downloadImage(item: Metadata, index: number) {
  const filename = `${index}_${item.width}x${item.height}.webp`;
  const filepath = path.join(imagesDir, filename);

  if (fs.existsSync(filepath)) {
    console.log(`Skipping existing ${filename}`);
    return;
  }

  const response = await fetch(item.url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${item.url}: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.promises.writeFile(filepath, buffer);
  console.log(`Saved ${filename}`);
}

main('metadata').catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
