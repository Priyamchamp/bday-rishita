
import { useEffect, useState } from 'react';

type ConfettiProps = {
  active: boolean;
  count?: number;
};

const Confetti = ({ active, count = 50 }: ConfettiProps) => {
  const [confettiElements, setConfettiElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!active) {
      setConfettiElements([]);
      return;
    }

    const colors = ['#FF69B4', '#9B59B6', '#3498DB', '#2ECC71', '#F1C40F', '#E74C3C'];
    const newConfetti: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const leftPosition = `${Math.random() * 100}%`;
      const size = `${Math.random() * 10 + 5}px`;
      const animationDelay = `${Math.random() * 5}s`;
      const animationDuration = `${Math.random() * 3 + 2}s`;

      newConfetti.push(
        <div
          key={i}
          className="confetti"
          style={{
            left: leftPosition,
            width: size,
            height: size,
            backgroundColor: color,
            animationDelay,
            animationDuration,
          }}
        />
      );
    }

    setConfettiElements(newConfetti);
  }, [active, count]);

  return <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">{confettiElements}</div>;
};

export default Confetti;
