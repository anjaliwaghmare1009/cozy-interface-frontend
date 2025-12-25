import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CarouselContainer from "@/components/containers/CarouselContainer";
import TextContentContainer from "@/components/containers/TextContentContainer";
import InteractiveSliderContainer from "@/components/containers/InteractiveSliderContainer";
import StaticContentContainer from "@/components/containers/StaticContentContainer";
import ButtonsContainer from "@/components/containers/ButtonsContainer";
import AnimatedSliderContainer from "@/components/containers/AnimatedSliderContainer";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Main content area */}
      <main className="pt-16 lg:pl-64 min-h-screen transition-all duration-300">
        <div className="p-4 lg:p-6">
          {/* Page header */}
          <div className="mb-6 opacity-0 animate-fade-in">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome to your personalized dashboard experience
            </p>
          </div>

          {/* Grid layout for containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {/* Container 1: Image Carousel */}
            <div className="md:col-span-2 xl:col-span-2">
              <CarouselContainer />
            </div>

            {/* Container 2: Text Content */}
            <div className="md:col-span-1">
              <TextContentContainer />
            </div>

            {/* Container 3: Interactive Slider */}
            <div className="md:col-span-1">
              <InteractiveSliderContainer />
            </div>

            {/* Container 4: Static Content */}
            <div className="md:col-span-2 xl:col-span-1">
              <StaticContentContainer />
            </div>

            {/* Container 5: Buttons */}
            <div className="md:col-span-1">
              <ButtonsContainer />
            </div>

            {/* Container 6: Animated Slider */}
            <div className="md:col-span-2 xl:col-span-2">
              <AnimatedSliderContainer />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 py-6 border-t border-border opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Lumina Dashboard. Crafted with precision.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
