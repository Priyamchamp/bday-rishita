
import { PropsWithChildren, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Confetti from './Confetti';
import Sparkles from './Sparkles';

type PageProps = PropsWithChildren<{
  id: string;
  className?: string;
  isActive: boolean;
  hasConfetti?: boolean;
  hasSparkles?: boolean;
  onLoad?: () => void;
}>;

const Page = ({ 
  id, 
  className, 
  isActive, 
  hasConfetti = false,
  hasSparkles = false,
  onLoad,
  children 
}: PageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isActive && !isLoaded) {
      setIsLoaded(true);
      if (onLoad) {
        onLoad();
      }
    }
  }, [isActive, isLoaded, onLoad]);

  return (
    <section
      id={id}
      className={cn(
        'min-h-screen w-full fixed top-0 left-0 transition-opacity duration-700 flex flex-col items-center justify-center p-6',
        className,
        isActive ? 'opacity-100 z-10' : 'opacity-0 -z-10'
      )}
    >
      {hasConfetti && <Confetti active={isActive && isLoaded} />}
      {hasSparkles && <Sparkles active={isActive && isLoaded} />}
      <div className="max-w-4xl w-full mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Page;
