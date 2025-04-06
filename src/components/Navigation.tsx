
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type NavigationProps = {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

const Navigation = ({ currentPage, totalPages, onPrev, onNext }: NavigationProps) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-white/80 backdrop-blur-md hover:bg-white"
        onClick={onPrev}
        disabled={currentPage === 0}
      >
        <ArrowLeft size={20} />
        <span className="sr-only">Previous</span>
      </Button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentPage ? 'bg-primary scale-125' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-white/80 backdrop-blur-md hover:bg-white"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
      >
        <ArrowRight size={20} />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  );
};

export default Navigation;
