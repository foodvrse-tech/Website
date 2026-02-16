import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Separator } from '@/components/ui/separator';

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="prose prose-lg max-w-4xl mx-auto">
              <h1 className="text-4xl font-headline font-bold text-primary">🌍 FoodVrse</h1>
              <h2 className="text-2xl font-semibold">Reshaping How Food Moves, Sells, and Sustains</h2>
              <p>
                <strong>FoodVrse</strong> is a venture studio building high-impact solutions to tackle systemic inefficiencies across the food value chain. We don’t just address food waste — we redesign how food is produced, distributed, sold, and consumed.
              </p>
              <p>
                Our approach is to build scalable ventures that create social, environmental, and economic impact. <strong>Dishii</strong>, our first venture in the retail sector, anchors this vision, with plans to expand vertically into precision agriculture, smart distribution, and sustainable agri-processing.
              </p>

              <Separator className="my-8" />

              <h2 className="text-3xl font-headline font-semibold">Our Vision</h2>
              <p>A resilient, efficient, and sustainable food ecosystem where:</p>
              <ul>
                <li>Every meal has value</li>
                <li>No good food goes to waste</li>
                <li>Sustainable consumption is the norm</li>
                <li>Food systems work smarter for people and the planet</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="text-3xl font-headline font-semibold">Our Mission</h2>
              <p>
                To design and scale high-impact ventures that solve systemic food challenges at scale, optimizing the flow of food from source to table.
              </p>

              <Separator className="my-8" />

              <h2 className="text-3xl font-headline font-semibold">Our Values</h2>
              <ul>
                <li><strong>Community First</strong> – Building strong local ecosystems where businesses, producers, and consumers support one another.</li>
                <li><strong>Sustainability</strong> – Every venture is designed to reduce environmental impact and advance climate resilience.</li>
                <li><strong>Systems Thinking</strong> – Tackling root causes rather than symptoms, designing integrated, tech-enabled solutions.</li>
                <li><strong>Transparency</strong> – Open about our processes, progress, and impact.</li>
                <li><strong>Innovation</strong> – Using creative, data-driven strategies to transform food systems.</li>
              </ul>

              <Separator className="my-8" />

              <h1 className="text-4xl font-headline font-bold text-primary">🍽 Dishii</h1>
              <h3 className="text-xl font-semibold">A FoodVrse Venture</h3>
              <p>
                <strong>Dishii</strong> is our first venture, focused on reducing food waste at the retail level while making quality meals more accessible.
              </p>
              <p>
                Born from the observation that perfectly good food was being discarded while communities struggled with rising food costs, Dishii connects restaurants, bakeries, and food vendors with conscious consumers through a digital platform. Surplus food is transformed into affordable “mystery bags,” creating value for businesses and meals for communities.
              </p>
              <h3 className="text-2xl font-headline font-semibold mt-6">What Dishii Solves</h3>
              <ul>
                <li>Reduces food waste in retail</li>
                <li>Helps businesses recover value from surplus</li>
                <li>Makes quality meals more affordable</li>
                <li>Reduces carbon emissions from discarded food</li>
              </ul>
              <h3 className="text-2xl font-headline font-semibold mt-6">Early Impact</h3>
              <p>Even before launch, Dishii has:</p>
              <ul>
                <li>Engaged <strong>20+ business partners</strong></li>
                <li>Reached <strong>50 early users</strong></li>
                <li>Validated demand for a more sustainable, accessible food system</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="text-3xl font-headline font-semibold">Our Journey</h2>
              <h3 className="text-xl font-semibold mt-4">2024 – The Idea</h3>
              <p>FoodVrse is conceived to tackle systemic inefficiencies across the food ecosystem. Dishii prototype is developed to test retail food surplus solutions.</p>
              <h3 className="text-xl font-semibold mt-4">Early 2025 – Pilot Phase</h3>
              <p>Began onboarding early restaurant partners and testing the Dishii platform with initial users.</p>
              <h3 className="text-xl font-semibold mt-4">Mid 2025 – Early Traction</h3>
              <p>Gained interest from 20+ businesses and engaged 50 early users, validating the model and refining the platform for launch.</p>
              <h3 className="text-xl font-semibold mt-4">Today – Preparing for Launch</h3>
              <ul>
                <li>Fine-tuning the platform based on pilot feedback</li>
                <li>Expanding partnerships and early community engagement</li>
                <li>Positioning Dishii as the anchor venture while FoodVrse develops broader vertical solutions</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="text-3xl font-headline font-semibold">The Bigger Picture</h2>
              <p>Dishii is the first building block of <strong>FoodVrse</strong>.</p>
              <p>Our ultimate goal is to create a fully integrated ecosystem where:</p>
              <ul>
                <li>Farmers produce efficiently</li>
                <li>Food moves smartly through distribution channels</li>
                <li>Retailers minimize waste</li>
                <li>Consumers access meals affordably</li>
              </ul>
              <p><strong>One venture at a time, we are reshaping how food moves, sells, and sustains.</strong></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
