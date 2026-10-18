import { getCollection, type CollectionEntry } from 'astro:content';

export interface StreamRecord {
  entry: CollectionEntry<'experience'>;
  offset: number;
  key: string;
  live: boolean;
}

const slug = (s: string) =>
  s
    .replace(/\b(j\.?s\.?c|ltd|inc|llc|co)\.?$/i, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Oldest first, so offsets count up like a Kafka topic.
export async function getStream(): Promise<StreamRecord[]> {
  const entries = await getCollection('experience');
  return entries
    .sort((a, b) => a.data.start.localeCompare(b.data.start) || a.data.order - b.data.order)
    .map((entry, offset) => ({
      entry,
      offset,
      key: `${slug(entry.data.company)}/${slug(entry.data.project)}`,
      live: !entry.data.end,
    }));
}

export function formatMonth(month: string): string {
  const [y, m] = month.split('-').map(Number);
  return new Date(y, m - 1).toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}
