import ContentCard from "../ContentCard";
import ImageCarousel from "../ImageCarousel";

const carouselImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=400&fit=crop",
];

const CarouselContainer = () => {
  return (
    <ContentCard title="Featured Gallery" className="h-[300px] lg:h-[320px]" delay={100}>
      <div className="h-[calc(100%-2rem)]">
        <ImageCarousel images={carouselImages} />
      </div>
    </ContentCard>
  );
};

export default CarouselContainer;
