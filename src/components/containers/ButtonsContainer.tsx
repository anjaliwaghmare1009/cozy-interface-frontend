import ContentCard from "../ContentCard";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ButtonsContainer = () => {
  return (
    <ContentCard title="Quick Actions" delay={300}>
      <p className="text-muted-foreground text-sm mb-5">
        Choose an action to get started with your journey.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="hero" size="lg" className="flex-1">
          <Sparkles className="h-4 w-4" />
          Get Started
        </Button>
        
        <Button variant="outline" size="lg" className="flex-1 group">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div className="mt-4 p-3 rounded-xl bg-muted/50 border border-border">
        <p className="text-xs text-muted-foreground text-center">
          ✨ Join 10,000+ users who've already upgraded their experience
        </p>
      </div>
    </ContentCard>
  );
};

export default ButtonsContainer;
