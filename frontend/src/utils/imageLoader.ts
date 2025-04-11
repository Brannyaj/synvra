export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith('http')) {
    return src;
  }
  return `${process.env.NEXT_PUBLIC_DOMAIN}${src}?w=${width}&q=${quality || 75}`;
}
