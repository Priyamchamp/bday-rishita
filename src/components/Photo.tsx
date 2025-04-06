
import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  animation?: 'zoom' | 'slide' | 'rotate';
};

const Photo = ({ src, alt, className, animation = 'zoom' }: PhotoProps) => {
  const animationClass = {
    'zoom': 'animate-bounce-in',
    'slide': 'animate-slide-right',
    'rotate': 'animate-rotate-in',
  }[animation];

  return (
    <div className={cn("photo-frame rounded-lg overflow-hidden", animationClass, className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default Photo;
