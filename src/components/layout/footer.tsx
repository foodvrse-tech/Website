import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Logo from './logo';

const quickLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#approach', label: 'Approach' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/company/foodvrse/', label: 'LinkedIn' },
  { href: '#', label: 'Twitter' },
  { href: 'https://www.instagram.com/foodvrse/', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-background" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <Separator className="mb-12 bg-accent" />
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          <div className="flex justify-center md:justify-start">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-warm-gray">&copy; 2026 FoodVrse</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-warm-gray hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:hello@foodvrse.com" className="text-warm-gray hover:text-accent transition-colors">
                  hello@foodvrse.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Social</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-warm-gray hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 py-6 text-center text-sm text-warm-gray/60">
          <p>Built by an expert senior engineer.</p>
        </div>
      </div>
    </footer>
  );
}
