import ContentCard from "../ContentCard";
import InteractiveSlider from "../InteractiveSlider";

const animatedSliderImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&h=500&fit=crop",
];

const AnimatedSliderContainer = () => {
  return (
    <ContentCard title="Design Inspiration" className="h-[340px] lg:h-[360px]" delay={350}>
      <div className="h-[calc(100%-2rem)]">
        <InteractiveSlider images={animatedSliderImages} showThumbnails />
      </div>
    </ContentCard>
  );
};

export default AnimatedSliderContainer;
