import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import {
  type BreakpointColumn,
  type VirtualItem,
  useBreakpoint,
  useWindowVirtualizer,
} from 'another-react-responsive-masonry';
import type { ImageMetadata as Metadata } from '@/types';
import { Card } from '@/ui/Card';

const breakpointColumns: BreakpointColumn[] = [
  { name: 'xs', minWidth: 0, nCol: 1 },
  { name: 'sm', minWidth: 400, nCol: 2 },
  { name: 'md', minWidth: 768, nCol: 3 },
  { name: 'lg', minWidth: 1024, nCol: 4 },
];

const INITIAL_COUNT = 40;
const BATCH_SIZE = 20;
const CARD_PADDING = 8; // px, matches p-2 utility used on Card wrapper

type MasonryItem = Metadata & {
  ratio: number;
  estimateHeight: (width: number) => number;
};

export function exploreLoader() {
  const t0 = performance.now();
  const dataLoading = fetch('/images-metadata.json').then(async (res) => {
    const data: Metadata[] = await res.json();
    const duration = performance.now() - t0;
    // load more time if too short
    const delay = randDelay(600, 1500);
    if (duration < delay) {
      await new Promise((resolve) => setTimeout(resolve, delay - duration));
    }
    return data;
  });
  return { dataLoading };
}

export function ExplorePage() {
  const { dataLoading } = useLoaderData<typeof exploreLoader>();

  return (
    <section className="max-w-7xl mx-auto px-4 pb-24 pt-24 lg:pt-28">
      <header className="mb-10 lg:mb-14 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gray-400 mb-2">
            / / / Nova Vision Feed
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Explore The Infinite Stream</h1>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Virtualized masonry grid powered by another-react-responsive-masonry. Scroll to
            continuously sample the curated Midjourney set.
          </p>
        </div>
      </header>

      <React.Suspense fallback={<LoaderBlock label="loading" className="text-lg" />}>
        <Await resolve={dataLoading}>{(metadata) => <ExploreMasonry metadata={metadata} />}</Await>
      </React.Suspense>
    </section>
  );
}

function ExploreMasonry({ metadata }: { metadata: Metadata[] }) {
  const { items, loadMoreRef, isLoading } = useInfiniteImages(metadata);

  const rowGap = 8;
  const columnGap = 4;
  const { columnRef, columns, rowVirtualizer } = useMasonry(items, rowGap);

  return (
    <div className="relative animate-fade-in">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns.length || 1}, 1fr)`,
          gap: columnGap,
          width: '100%',
          height: rowVirtualizer.getTotalSize(),
        }}
      >
        {columns.map((column, index) => (
          <div
            ref={index === 0 ? columnRef : undefined}
            key={`col-${index}`}
            className="flex flex-col relative"
          >
            {column.map((virtualItem) => {
              const item = items[virtualItem.index];
              return (
                <MasonryCard
                  key={item.id}
                  item={item}
                  virtualItem={virtualItem}
                  measureElement={rowVirtualizer.measureElement}
                  scrollMargin={rowVirtualizer.options.scrollMargin ?? 0}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div ref={loadMoreRef} className="h-2" />
      {isLoading && <LoaderBlock label="loading" className="mt-6 text-md" />}
    </div>
  );
}

function useMasonry(items: MasonryItem[], rowGap: number) {
  const { currentBreakpoint } = useBreakpoint(breakpointColumns);
  const columnRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(true);
  }, []);

  const rowVirtualizer = useWindowVirtualizer({
    enabled,
    count: items.length,
    overscan: 12,
    scrollMargin: columnRef.current?.offsetTop,
    lanes: currentBreakpoint.nCol,
    gap: rowGap,
    useAnimationFrameWithResizeObserver: true,
    resizeDelay: 150,
    estimateSize: (index) => {
      const columnWidth = columnRef.current?.clientWidth ?? 320;
      return items[index]?.estimateHeight(columnWidth) ?? 240;
    },
  });

  const { virtualItems, lanes } = rowVirtualizer.getVirtualItems();

  const columns = useMemo(() => {
    const arr = Array.from({ length: lanes || 1 }, () => [] as VirtualItem[]);
    for (const item of virtualItems) {
      arr[item.lane].push(item);
    }
    return arr;
  }, [virtualItems, lanes]);

  return { columnRef, columns, rowVirtualizer };
}

type InfiniteState = {
  items: MasonryItem[];
  cursor: number;
  cycle: number;
};

function useInfiniteImages(metadata: Metadata[]) {
  const [state, setState] = useState<InfiniteState>(() => initialiseState(metadata));
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setState(initialiseState(metadata));
  }, [metadata]);

  const appendBatch = useCallback(
    (count: number) => {
      setState((prev) => {
        const { batch, nextCursor, nextCycle } = buildBatch(
          metadata,
          prev.cursor,
          prev.cycle,
          count,
          prev.items.length
        );

        return {
          items: [...prev.items, ...batch],
          cursor: nextCursor,
          cycle: nextCycle,
        };
      });
    },
    [metadata]
  );

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        setIsLoading((current) => {
          if (current) return current;

          const delay = randDelay(400, 1200);
          setTimeout(() => {
            appendBatch(BATCH_SIZE);
            setIsLoading(false);
          }, delay);

          return true;
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [appendBatch]);

  return { items: state.items, loadMoreRef, isLoading };
}

function initialiseState(metadata: Metadata[]): InfiniteState {
  if (metadata.length === 0) {
    return { items: [], cursor: 0, cycle: 0 };
  }

  const { batch, nextCursor, nextCycle } = buildBatch(metadata, 0, 0, INITIAL_COUNT, 0);
  return { items: batch, cursor: nextCursor, cycle: nextCycle };
}

function buildBatch(
  metadata: Metadata[],
  cursor: number,
  cycle: number,
  size: number,
  sequenceStart: number
) {
  if (metadata.length === 0) {
    return { batch: [] as MasonryItem[], nextCursor: cursor, nextCycle: cycle };
  }

  const batch: MasonryItem[] = [];
  let currentCursor = cursor;
  let currentCycle = cycle;

  for (let i = 0; i < size; i += 1) {
    const meta = metadata[currentCursor];
    const sequence = sequenceStart + i + currentCycle * metadata.length;
    batch.push(createMasonryItem(meta, sequence));

    currentCursor += 1;
    if (currentCursor >= metadata.length) {
      currentCursor = 0;
      currentCycle += 1;
    }
  }

  shuffleArray(batch);
  return { batch, nextCursor: currentCursor, nextCycle: currentCycle };
}

function createMasonryItem(meta: Metadata, sequence: number): MasonryItem {
  const ratio = meta.height / meta.width;
  return {
    ...meta,
    ratio,
    estimateHeight: (columnWidth: number) => {
      const innerWidth = Math.max(columnWidth - CARD_PADDING * 2, 0);
      const imageHeight = innerWidth * ratio;
      const h = imageHeight + CARD_PADDING * 2;
      return h;
    },
  };
}

function shuffleArray<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

interface MasonryCardProps {
  item: MasonryItem;
  virtualItem: VirtualItem;
  measureElement: (node: Element | null | undefined) => void;
  scrollMargin: number;
}

const MasonryCard = React.memo(function MasonryCard({
  item,
  virtualItem,
  measureElement,
  scrollMargin,
}: MasonryCardProps) {
  return (
    <div
      ref={measureElement}
      id={item.id}
      data-index={virtualItem.index}
      className="absolute left-0 w-full"
      style={{ transform: `translateY(${virtualItem.start - scrollMargin}px)` }}
    >
      <Card corners={false} className="relative p-2">
        <div className="relative w-full overflow-hidden">
          <div className="block w-full" style={{ paddingBottom: `${item.ratio * 100}%` }} />
          <img
            src={item.url}
            alt={item.prompt ?? 'Generated artwork'}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Card>
    </div>
  );
});

interface LoaderBlockProps {
  label: string;
  className?: string;
}

function LoaderBlock({ label, className }: LoaderBlockProps) {
  return (
    <div className={`flex items-center gap-2 font-mono text-sm ${className ?? ''}`}>
      <span className="h-2 w-2 rounded-full bg-nova-pink animate-pulse"></span>
      <LoadingTag label={label} />
    </div>
  );
}

function LoadingTag({ label }: { label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 uppercase tracking-[0.25em] font-mono`}
    >
      <span>{label}</span>
      <span
        className="w-3 inline-block overflow-hidden"
        style={{ animation: 'ellipsis 1.2s steps(4, end) infinite' }}
      >
        ...
      </span>
      <style>{`
        @keyframes ellipsis {
          to { width: 4em; }
        }
      `}</style>
    </span>
  );
}

function randDelay(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
