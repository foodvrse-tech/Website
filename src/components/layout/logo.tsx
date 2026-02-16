import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("text-xl sm:text-2xl font-bold font-headline tracking-wide text-primary", className)}>
      FoodVrse<span className="text-accent">.</span>
    </div>
  );
}
