import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: 'Community First',
    description: 'Building strong local ecosystems where businesses, producers, and consumers support one another.',
  },
  {
    title: 'Sustainability',
    description: 'Every venture is designed to reduce environmental impact and advance climate resilience.',
  },
  {
    title: 'Systems Thinking',
    description: 'Tackling root causes rather than symptoms, designing integrated, tech-enabled solutions.',
  },
  {
    title: 'Transparency',
    description: 'Open about our processes, progress, and impact.',
  },
  {
    title: 'Innovation',
    description: 'Using creative, data-driven strategies to transform food systems.',
  },
];

const journeySteps = [
    {
        year: '2024 – The Idea',
        description: 'FoodVrse is founded to tackle systemic inefficiencies across the food ecosystem. Dishii prototype is developed to test retail food surplus solutions.'
    },
    {
        year: 'Early 2025 – Pilot Phase',
        description: 'Onboarded early restaurant partners and tested the Dishii platform with initial users.'
    },
    {
        year: 'Mid 2025 – Early Traction',
        description: 'Gained interest from 20+ businesses and engaged 50 early users, refining the model and platform.'
    },
    {
        year: 'Today – Preparing for Launch',
        items: [
            'Fine-tuning the platform based on pilot feedback',
            'Expanding partnerships and early community engagement',
            'Positioning Dishii as the anchor brand while FoodVrse develops broader vertical solutions'
        ]
    }
];

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-headline font-bold text-primary">🌍 FoodVrse</h1>
              <p className="mt-4 text-2xl font-semibold text-muted-foreground">
                Reshaping How Food Moves, Sells, and Sustains
              </p>
              <p className="mt-6 text-lg text-foreground/80">
                FoodVrse is the parent company behind high-impact brands that tackle systemic inefficiencies across the food value chain. We don’t just address food waste — we rethink how food is produced, distributed, sold, and consumed.
              </p>
              <p className="mt-4 text-lg text-foreground/80">
                We build and grow our own ventures to create social, environmental, and economic impact. <strong>Dishii</strong>, our first brand in the retail sector, anchors this vision, with plans to expand into precision agriculture, smart distribution, and sustainable agri-processing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-headline font-semibold text-primary">Our Vision</h2>
                        <p className="text-lg text-muted-foreground">A resilient, efficient, and sustainable food ecosystem where:</p>
                        <ul className="space-y-3 pt-2">
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                                <span>Every meal has value</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                                <span>No good food goes to waste</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                                <span>Sustainable consumption is the norm</span>
                            </li>
                             <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                                <span>Food systems work smarter for people and the planet</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-headline font-semibold text-primary">Our Mission</h2>
                        <p className="text-lg text-foreground/80">
                           To design and scale high-impact brands that solve systemic food challenges, optimizing the flow of food from source to table while creating social and environmental impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
                 <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-headline font-semibold text-primary text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="text-center">
                                <h3 className="font-semibold text-xl text-primary">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </section>
        
        <section className="py-12 md:py-16 bg-secondary">
             <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-headline font-semibold text-primary text-center mb-12">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-3.5 top-0 h-full w-px bg-border" aria-hidden="true" />
                        <ul className="space-y-12">
                            {journeySteps.map((step) => (
                                <li key={step.year} className="relative pl-12">
                                    <div className="absolute left-0 top-1">
                                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center ring-8 ring-secondary">
                                            <div className="w-3 h-3 bg-primary rounded-full" />
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-xl text-primary">{step.year}</h3>
                                    {step.description && <p className="mt-2 text-muted-foreground">{step.description}</p>}
                                    {step.items && (
                                        <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                                            {step.items.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                     <p className="text-center mt-12 text-lg">One brand at a time, we are <strong>reshaping how food moves, sells, and sustains</strong>.</p>
                </div>
             </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
