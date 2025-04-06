
import { useEffect, useState } from 'react';

type FireworksProps = {
  active: boolean;
  count?: number;
};

const Fireworks = ({ active, count = 10 }: FireworksProps) => {
  const [fireworks, setFireworks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!active) {
      setFireworks([]);
      return;
    }

    const colors = ['#FF69B4', '#9B59B6', '#3498DB', '#2ECC71', '#F1C40F', '#E74C3C'];
    const newFireworks: JSX.Element[] = [];

    const createFirework = (index: number) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 3}s`;
      const size = `${Math.random() * 5 + 10}px`;

      return (
        <div
          key={index}
          className="firework absolute bottom-0 left-1/2 w-4 h-4"
          style={{
            left,
            animationDelay: delay,
          }}
        >
          <div className="relative">
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i / 20) * 360;
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-fade-in"
                  style={{
                    backgroundColor: color,
                    width: size,
                    height: size,
                    transform: `rotate(${angle}deg) translate(40px)`,
                    opacity: Math.random() * 0.7 + 0.3,
                  }}
                />
              );
            })}
          </div>
        </div>
      );
    };

    for (let i = 0; i < count; i++) {
      newFireworks.push(createFirework(i));
    }

    setFireworks(newFireworks);

    // Create new fireworks every 2 seconds
    const interval = setInterval(() => {
      setFireworks(prev => {
        const newSet = [...prev];
        if (newSet.length > 20) {
          newSet.shift(); // Remove oldest firework
        }
        newSet.push(createFirework(Date.now()));
        return newSet;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [active, count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireworks}
    </div>
  );
};

export default Fireworks;
