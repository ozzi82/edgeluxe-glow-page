import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import channelLetterUnlit from "@/assets/channel-letter-unlit.png";
import channelLetterLit from "@/assets/channel-letter-lit.png";

const ProductHero = () => {
  const [isLit, setIsLit] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%)`,
        }}
      />

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

        {/* Product Image with Transition */}
        <div className="relative">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsLit(true)}
            onMouseLeave={() => setIsLit(false)}
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            {/* Unlit Image */}
            <img
              src={channelLetterUnlit}
              alt="EdgeLuxe LP 3.1 Channel Letter - Unlit"
              className={`w-full h-auto transition-opacity duration-700 ${
                isLit ? 'opacity-0' : 'opacity-100'
              }`}
            />
            
            {/* Lit Image */}
            <img
              src={channelLetterLit}
              alt="EdgeLuxe LP 3.1 Channel Letter - Illuminated"
              className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-700 ${
                isLit ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Glow Effect */}
            <div className={`absolute inset-0 transition-all duration-700 ${
              isLit 
                ? 'bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-100' 
                : 'opacity-0'
            }`} />
          </div>

          {/* Interaction Hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-sm text-muted-foreground animate-pulse">
              Hover to see illumination
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;