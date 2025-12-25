import ContentCard from "../ContentCard";
import InteractiveSlider from "../InteractiveSlider";

const sliderImages = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1682695798522-6e208131916d?w=800&h=500&fit=crop",
];

const InteractiveSliderContainer = () => {
  return (
    <ContentCard title="Explore Collection" className="h-[300px] lg:h-[320px]" delay={200}>
      <div className="h-[calc(100%-2rem)]">
        <InteractiveSlider images={sliderImages} />
      </div>
    </ContentCard>
  );
};

export default InteractiveSliderContainer;
