import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ProductHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Trigger lit effect based on scroll position
      const triggerPoint = window.innerHeight * 0.3;
      setIsLit(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform values based on scroll
  const scale = Math.max(1, 1 + scrollY * 0.001);
  const opacity = Math.max(0, 1 - scrollY * 0.002);
  const translateY = scrollY * 0.5;

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Product Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 px-3 py-1 rounded-full">Premium</span>
                <span className="bg-accent/10 px-3 py-1 rounded-full">UL Listed</span>
                <span className="bg-secondary/10 px-3 py-1 rounded-full">3 Year Warranty</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                EdgeLuxe LP 3.1
              </h1>
              <p className="text-xl text-muted-foreground">
                Fabricated Stainless Steel with standoffs for halo-lit effects
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Request Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Catalog
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                In Stock
              </div>
              <div>Ships in 2-3 weeks</div>
              <div>Free consultation</div>
            </div>
          </div>

          {/* Initial Product Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="/lovable-uploads/a738410a-4301-496f-b774-628c90f41c2b.png"
                alt="EdgeLuxe LP 3.1 Channel Letter - Unlit"
                className="w-full h-auto"
                style={{
                  transform: `translateY(${translateY * -0.3}px)`,
                  opacity: opacity
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Scroll to illuminate</p>
        </div>
      </section>

      {/* Apple-style Parallax Section */}
      <section className="relative h-[200vh] bg-black">
        {/* Fixed Container for Parallax Effect */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background Unlit Image */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `scale(${scale}) translateY(${translateY * -0.2}px)`,
              opacity: isLit ? 0 : 1,
              transition: 'opacity 1s ease-out'
            }}
          >
            <img
              src="/lovable-uploads/a738410a-4301-496f-b774-628c90f41c2b.png"
              alt="Channel Letter Unlit"
              className="max-w-3xl w-full h-auto"
            />
          </div>

          {/* Foreground Lit Image with Apple-style Animation */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `scale(${isLit ? scale * 1.2 : 0.8}) translateY(${translateY * -0.1}px)`,
              opacity: isLit ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              filter: isLit ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.8)'
            }}
          >
            <img
              src="/lovable-uploads/75f6fbe0-fed3-4fa6-87e3-009666c5ce78.png"
              alt="Channel Letter Illuminated"
              className="max-w-3xl w-full h-auto"
            />
            
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                transform: `scale(${isLit ? 1.5 : 0})`,
                transition: 'transform 1.5s ease-out'
              }}
            />
          </div>

          {/* Floating Text Overlay */}
          <div 
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white z-20"
            style={{
              opacity: isLit ? 1 : 0,
              transform: `translateY(${isLit ? 0 : 30}px)`,
              transition: 'all 1s ease-out 0.5s'
            }}
          >
            <h2 className="text-4xl font-bold mb-4">See the Difference</h2>
            <p className="text-xl text-white/80">Professional LED illumination that transforms your signage</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHero;