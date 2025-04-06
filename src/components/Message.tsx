
import { cn } from "@/lib/utils";

type MessageProps = {
  text: string;
  className?: string;
  animation?: 'fade' | 'slide' | 'typewriter';
  delay?: number;
};

const Message = ({ text, className, animation = 'fade', delay = 0 }: MessageProps) => {
  let animationClass = '';
  
  switch (animation) {
    case 'fade':
      animationClass = 'animate-fade-in';
      break;
    case 'slide':
      animationClass = 'animate-slide-up';
      break;
    case 'typewriter':
      animationClass = 'typewriter';
      break;
  }

  const style = {
    animationDelay: delay ? `${delay}ms` : undefined,
  };

  return (
    <p 
      className={cn(
        "text-3xl md:text-4xl font-dancing",
        animationClass, 
        className
      )}
      style={style}
    >
      {text}
    </p>
  );
};

export default Message;
