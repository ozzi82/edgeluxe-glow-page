import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import Navigation from "./Navigation";

const ProductHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [visibleSpecs, setVisibleSpecs] = useState<boolean[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    // Initialize card visibility arrays
    setVisibleCards(new Array(3).fill(false));
    setVisibleSpecs(new Array(4).fill(false));
    
    // Intersection Observer for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            const type = entry.target.getAttribute('data-type');
            
            if (type === 'feature-card') {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            } else if (type === 'spec-card') {
              setVisibleSpecs(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    // Observe elements after a delay to allow DOM to render
    setTimeout(() => {
      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    }, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const fadeOpacity = Math.max(0, 1 - scrollY * 0.002);

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Animated Mesh Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'var(--gradient-mesh)',
            transform: `translateY(${parallaxOffset * 0.3}px)`
          }}
        />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />
        
        <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">UL Listed</span>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">3 Year Warranty</span>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">LED Technology</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black">
                  <span className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    EdgeLuxe
                  </span>
                  <span className="block text-5xl lg:text-7xl text-muted-foreground">
                    LP 3.1
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                  Premium fabricated stainless steel channel letters with 
                  <span className="text-primary font-semibold"> professional LED illumination</span> 
                  and standoff mounting system.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                >
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-border/50 hover:border-primary/50 hover:bg-card/50 backdrop-blur-sm transition-all duration-300"
                >
                  View Catalog
                </Button>
              </div>

              {/* Status Indicators */}
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-muted-foreground">In Stock</span>
                </div>
                <div className="text-muted-foreground">Ships in 2-3 weeks</div>
                <div className="text-muted-foreground">Free consultation</div>
              </div>
            </div>

            {/* Product Image with Hover Effect */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
              <div 
                className="relative group cursor-pointer"
                style={{
                  transform: `translateY(${parallaxOffset * -0.2}px)`,
                  opacity: fadeOpacity
                }}
              >
                {/* Unlit Version */}
                <div className="relative transition-opacity duration-700 group-hover:opacity-0">
                  <img
                    src="/lovable-uploads/a738410a-4301-496f-b774-628c90f41c2b.png"
                    alt="EdgeLuxe LP 3.1 - Unlit"
                    className="w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 rounded-3xl"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-medium">Daylight View</span>
                  </div>
                </div>
                
                {/* Lit Version - Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <img
                    src="/lovable-uploads/75f6fbe0-fed3-4fa6-87e3-009666c5ce78.png"
                    alt="EdgeLuxe LP 3.1 - Illuminated"
                    className="w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 rounded-3xl"
                  />
                  <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-medium">Night Illumination</span>
                  </div>
                </div>
              </div>
              
              <p className="text-center mt-6 text-muted-foreground italic">
                Hover to see illumination effect
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground">Scroll to explore</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div 
          className="container mx-auto px-6 relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <div className="text-center mb-20">
            <h2 
              className="text-4xl lg:text-6xl font-bold mb-6"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Precision Engineering
              </span>
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`
              }}
            >
              Every EdgeLuxe channel letter is crafted with meticulous attention to detail, 
              combining traditional fabrication techniques with cutting-edge LED technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Stainless Steel Construction",
                description: "Premium 316L stainless steel with brushed finish for maximum durability and weather resistance.",
                icon: "🔧"
              },
              {
                title: "LED Illumination System",
                description: "High-efficiency LED modules with 50,000+ hour lifespan and uniform light distribution.",
                icon: "💡"
              },
              {
                title: "Precision Mounting",
                description: "Custom standoff system ensures perfect alignment and professional halo-lit effects.",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                data-animate
                data-type="feature-card"
                data-index={index}
                className={`group p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{
                  background: 'var(--gradient-card)',
                  transform: `translateY(${scrollY * (0.03 + index * 0.01)}px) ${visibleCards[index] ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.95)'}`,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="relative py-40 overflow-hidden">
        <div 
          className="container mx-auto px-6"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        >
          <div className="text-center space-y-8">
            <h2 
              className="text-5xl font-bold mb-6"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`
              }}
            >
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Day & Night
              </span>
              <br />
              <span className="text-foreground">Performance</span>
            </h2>
            <p 
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.12}px)`
              }}
            >
              Experience the dramatic transformation from sophisticated daytime presence 
              to stunning nighttime illumination. Our EdgeLuxe LP 3.1 delivers 
              exceptional visibility and brand impact around the clock.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {[
                { label: "Lumens Output", value: "2,400 LM" },
                { label: "Color Temperature", value: "3000K-6500K" },
                { label: "Energy Efficiency", value: "95% LED" },
                { label: "Operating Temp", value: "-40°F to 185°F" }
              ].map((spec, index) => (
                <div 
                  key={index} 
                  data-animate
                  data-type="spec-card"
                  data-index={index}
                  className={`text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-700 ${
                    visibleSpecs[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{
                    transform: `translateY(${scrollY * (0.02 + index * 0.005)}px) ${visibleSpecs[index] ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)'}`,
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{spec.value}</div>
                  <div className="text-muted-foreground">{spec.label}</div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-lg py-6 px-8 mt-12"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              Download Full Specifications
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHero;