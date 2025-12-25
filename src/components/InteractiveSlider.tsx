import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveSliderProps {
  images: string[];
  showThumbnails?: boolean;
}

const InteractiveSlider = ({ images, showThumbnails = false }: InteractiveSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="relative flex-1 overflow-hidden rounded-xl">
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-card transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-card transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-foreground/80 text-background text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-200",
                index === currentIndex
                  ? "ring-2 ring-accent ring-offset-2 ring-offset-card"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveSlider;
