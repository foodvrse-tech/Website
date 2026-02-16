import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DishiiLogo() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'dishii-logo');
  
  // Fallback in case the image isn't found, though it should be.
  if (!logoImage) {
    return <div>Dishii</div>;
  }

  return (
    <Image
      src={logoImage.imageUrl}
      alt={logoImage.description}
      data-ai-hint={logoImage.imageHint}
      width={340}
      height={80}
      className="h-auto w-full max-w-[240px]"
    />
  );
}
