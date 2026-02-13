import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import TwoColumnSection from '@/components/sections/two-column-section';
import LinkWithDot from '@/components/shared/link-with-dot';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const impactMetrics = [
  { value: '2', label: 'Ventures launched' },
  { value: '15,000+', label: 'Meals saved via Dishii' },
  { value: '85+', label: 'Partner restaurants' },
  { value: '4 tons', label: 'CO₂ mitigated' },
];

export default function Home() {
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
            <LinkWithDot href="#portfolio">Explore our ventures</LinkWithDot>
          </div>
        </TwoColumnSection>

        <TwoColumnSection id="approach" title="Our Approach" className="bg-background">
          <div className="space-y-6 text-lg text-warm-gray leading-relaxed">
            <p>
              We identify broken links in the food chain and build technology-driven ventures to fix them. From incubation to scale, we provide capital, expertise, and infrastructure to founders solving real problems.
            </p>
            <p>
              Each brand operates independently while sharing our network, insights, and commitment to sustainability.
            </p>
            <LinkWithDot href="#approach">How we build</LinkWithDot>
          </div>
        </TwoColumnSection>

        <TwoColumnSection id="impact" title="Our Impact" className="bg-secondary">
          <div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-2 md:gap-12">
              {impactMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-headline text-5xl font-bold text-forest-green lg:text-6xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-warm-gray">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-warm-gray/80">Updated quarterly</p>
          </div>
        </TwoColumnSection>

        <section className="bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid items-center gap-8 md:grid-cols-3 md:gap-16">
              <div className="md:col-span-1">
                <h2 className="font-headline text-5xl font-bold text-dishii-orange md:text-6xl">Dishii</h2>
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
