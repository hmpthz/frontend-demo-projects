import type { ImageMetadata as Metadata } from '@/types';

export async function exploreLoader() {
  const response = await fetch('./images-metadata.json');
  const data: Metadata[] = await response.json();
  console.log(data);
  return data;
}

export function ExplorePage() {
  return <h1>Explore</h1>;
}
