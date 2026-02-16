import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedContent from '@/components/shared/animated-content';

const partners = [
  {
    id: 'techstars',
    logoId: 'techstars-logo',
    name: 'Techstars',
    description: 'The global investment business that provides access to capital, mentorship, and programming for early-stage entrepreneurs.',
  },
  {
    id: 'undp',
    logoId: 'undp-logo',
    name: 'UNDP',
    description: 'Working together to achieve the Sustainable Development Goals, focusing on poverty, inequality, and climate change.',
  },
  {
    id: 'pittopalace',
    logoId: 'pittopalace-logo',
    name: 'Pittopalace',
    description: 'Shaping a prosperous and resilient future for Africa by empowering its youth and SMEs through climate adaptation.',
  },
  {
    id: '500-global',
    logoId: '500-global-logo',
    name: '500 Global',
    description: "Backing the world's most talented entrepreneurs and helping them create successful companies at scale.",
  },
];

export default function TrustedBySection() {
  return (
    <section id="partners" className="bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContent>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-primary">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Recognition & Partnerships
            </p>
          </div>
        </AnimatedContent>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => {
            const logoImage = PlaceHolderImages.find(p => p.id === partner.logoId);
            return (
              <AnimatedContent key={partner.id} delay={100 + index * 100}>
                <Card className="text-center bg-card shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg h-full">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="flex justify-center items-center h-24 mb-6">
                      {logoImage ? (
                        <Image
                          src={logoImage.imageUrl}
                          alt={`${partner.name} logo`}
                          data-ai-hint={logoImage.imageHint}
                          width={140}
                          height={60}
                          className="object-contain max-h-16 w-auto"
                        />
                      ) : (
                        <div className="w-32 h-16 bg-muted rounded-md" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
