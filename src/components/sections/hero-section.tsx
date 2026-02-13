import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  
  if (!heroImage) {
    return null; // Or a fallback
  }

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center p-0">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-headline text-5xl font-semibold md:text-7xl lg:text-8xl">
          Building the Future of Food
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          A parent company launching high-impact ventures across Africa&apos;s food system.
        </p>
        <Button asChild size="lg" variant="outline" className="mt-8 border-2 border-accent text-white bg-transparent hover:bg-accent hover:text-primary-foreground transition-all duration-300 text-base">
          <Link href="#portfolio">
            Explore our ventures
          </Link>
        </Button>
      </div>
    </section>
  );
}
