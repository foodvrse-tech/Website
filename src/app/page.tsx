import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import TwoColumnSection from '@/components/sections/two-column-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import DishiiLogo from '@/components/layout/dishii-logo';

export default function Home() {
  const approachImage = PlaceHolderImages.find(img => img.id === 'approach-background');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <TwoColumnSection id="portfolio" title="Our Portfolio" className="bg-secondary">
          <div className="space-y-6 text-lg text-warm-gray leading-relaxed">
            <p>
              Reshaping how food moves, sells, and sustains.
            </p>
            <p>
              We build high-impact ventures that solve systemic problems at scale, anchored by Dishii in the retail sector, and expanding vertically into precision agriculture, smart distribution, and sustainable agri-processing.
            </p>
          </div>
        </TwoColumnSection>

        <section id="approach" className="relative py-16 md:py-24">
          {approachImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={approachImage.imageUrl}
                alt={approachImage.description}
                data-ai-hint={approachImage.imageHint}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>
          )}
          <div className="container relative z-10 mx-auto px-4 md:px-8">
            <div className="grid items-start gap-8 md:grid-cols-3 md:gap-16">
              <div className="md:col-span-1">
                <h2 className="font-headline sticky top-24 text-3xl font-semibold text-white">
                  Our Approach
                </h2>
              </div>
              <div className="md:col-span-2">
                <div className="space-y-6 text-lg leading-relaxed text-white/90">
                  <p>
                    We identify broken links in the food chain and build technology-driven ventures to fix them. From incubation to scale, we provide capital, expertise, and infrastructure to founders solving real problems.
                  </p>
                  <p>
                    Each brand operates independently while sharing our network, insights, and commitment to sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid items-center gap-8 md:grid-cols-3 md:gap-16">
              <div className="md:col-span-1">
                <DishiiLogo />
              </div>
              <div className="md:col-span-2">
                <p className="text-lg leading-relaxed text-warm-gray">
                  A consumer marketplace connecting people to surplus meals from restaurants and supermarkets at discounted prices. Good for wallets. Good for the planet.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-lg text-primary hover:text-accent">
                  <Link href="http://www.dishii.co/" target="_blank" rel="noopener noreferrer">
                    Visit Dishii →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
