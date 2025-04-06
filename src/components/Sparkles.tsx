
import { useEffect, useState } from 'react';

type SparklesProps = {
  active: boolean;
  count?: number;
};

const Sparkles = ({ active, count = 30 }: SparklesProps) => {
  const [sparkleElements, setSparkleElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!active) {
      setSparkleElements([]);
      return;
    }

    const newSparkles: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
      const leftPosition = `${Math.random() * 100}%`;
      const topPosition = `${Math.random() * 100}%`;
      const size = `${Math.random() * 6 + 2}px`;
      const animationDelay = `${Math.random() * 2}s`;
      const opacity = Math.random() * 0.7 + 0.3;
      
      newSparkles.push(
        <div
          key={i}
          className="sparkle"
          style={{
            left: leftPosition,
            top: topPosition,
            width: size,
            height: size,
            opacity,
            animationDelay,
          }}
        />
      );
    }

    setSparkleElements(newSparkles);
  }, [active, count]);

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{sparkleElements}</div>;
};

export default Sparkles;
