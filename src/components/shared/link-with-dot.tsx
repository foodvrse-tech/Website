import Link from 'next/link';

interface LinkWithDotProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkWithDot({ href, children }: LinkWithDotProps) {
  return (
    <Link href={href} className="inline-flex items-center font-medium text-primary transition-colors group">
      <span className="mr-3 text-lg text-accent transition-transform group-hover:translate-x-1">●</span>
      <span className="border-b border-primary/50 group-hover:border-accent transition-colors">{children}</span>
    </Link>
  );
}
