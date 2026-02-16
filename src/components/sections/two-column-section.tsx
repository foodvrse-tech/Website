import { cn } from '@/lib/utils';
import AnimatedContent from '@/components/shared/animated-content';

interface TwoColumnSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function TwoColumnSection({ id, title, children, className }: TwoColumnSectionProps) {
  return (
    <section id={id} className={cn("overflow-hidden", className)}>
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContent>
          <div className="grid items-start gap-8 md:grid-cols-3 md:gap-16">
            <div className="md:col-span-1">
              <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-primary sticky top-24">
                {title}
              </h2>
            </div>
            <div className="md:col-span-2">
              {children}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
