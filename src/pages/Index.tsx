import { useState, useEffect } from "react";
import Page from "@/components/Page";
import Photo from "@/components/Photo";
import Message from "@/components/Message";
import Navigation from "@/components/Navigation";
import Fireworks from "@/components/Fireworks";

// Sample photos - you can replace these with actual photos of the birthday person
const photos = [
  "/IMG-20250606-WA0004.jpg",
  "/IMG-20250606-WA0005.jpg",
  "/IMG_20250607_214741.jpg",
  "/IMG-20250606-WA0007.jpg",
];

const messages = [
  "To the Star of the Day!",
  "You make every moment brighter",
  "Here's to your amazing journey!",
  "Happy Birthday! 🎂",
];

// Update the name of the birthday person here
const birthdayPerson = "Rishita";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;
  
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // Optional: Auto-progress the pages
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage < totalPages - 1) {
        setCurrentPage(p => p + 1);
      }
    }, 8000); // Change page every 8 seconds
    
    return () => clearTimeout(timer);
  }, [currentPage]);
  
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Page 1: Opening */}
      <Page 
        id="page-1"
        isActive={currentPage === 0}
        hasSparkles={true}
        className="bg-gradient-1"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <Photo 
            src={photos[0]} 
            alt="Birthday person" 
            className="w-80 h-80 md:w-[500px] md:h-[500px]"
            animation="zoom"
          />
          <Message 
            text={messages[0]}
            animation="fade"
            delay={500}
            className="text-primary font-bold"
          />
        </div>
      </Page>
      
      {/* Page 2: Second slide */}
      <Page 
        id="page-2"
        isActive={currentPage === 1}
        hasConfetti={true}
        className="bg-gradient-2"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Photo 
            src={photos[1]} 
            alt="Birthday person" 
            className="w-80 h-80 md:w-[500px] md:h-[500px]"
            animation="slide"
          />
          <Message 
            text={messages[1]}
            animation="typewriter"
            className="text-secondary"
          />
        </div>
      </Page>
      
      {/* Page 3: Third slide */}
      <Page 
        id="page-3"
        isActive={currentPage === 2}
        hasSparkles={true}
        className="bg-gradient-3"
      >
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
          <Photo 
            src={photos[2]} 
            alt="Birthday person" 
            className="w-80 h-80 md:w-[500px] md:h-[500px]"
            animation="rotate"
          />
          <Message 
            text={messages[2]}
            animation="slide"
            className="text-primary"
          />
        </div>
      </Page>
      
      {/* Page 4: Grand finale */}
      <Page 
        id="page-4"
        isActive={currentPage === 3}
        hasConfetti={true}
        className="bg-gradient-final"
      >
        <Fireworks active={currentPage === 3} count={15} />
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl md:text-7xl font-dancing font-bold text-accent-foreground animate-bounce-in">
            Happy Birthday, {birthdayPerson}!
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {photos.map((photo, index) => (
              <Photo 
                key={index}
                src={photo} 
                alt={`Photo ${index + 1}`} 
                className="w-48 h-48 md:w-64 md:h-64"
                animation="fade"
              />
            ))}
          </div>
          
          <Message 
            text="May all your wishes come true! 💫"
            animation="fade"
            delay={1000}
            className="text-accent-foreground mt-8"
          />
          
          <Button 
            onClick={() => setCurrentPage(0)}
            className="animate-fade-in mt-8"
            style={{ animationDelay: '1.5s' }}
          >
            Replay
          </Button>
        </div>
      </Page>
      
      <Navigation 
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

// Custom reusable button component
const Button = ({ 
  onClick, 
  children, 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Index;
