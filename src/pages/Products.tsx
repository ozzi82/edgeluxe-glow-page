import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Award, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";

const Products = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const parallaxOffset = scrollY * 0.3;

  const products = [
    {
      name: "EdgeLuxe LP 1",
      description: "Entry-level precision channel letters with LED illumination",
      features: ["Basic LED System", "Standard Mounting", "1 Year Warranty"],
      category: "Essential"
    },
    {
      name: "EdgeLuxe 3.1",
      description: "Premium fabricated stainless steel with professional LED illumination",
      features: ["Advanced LED System", "Precision Mounting", "3 Year Warranty"],
      category: "Professional",
      featured: true
    },
    {
      name: "EdgeLuxe 3.2",
      description: "Enhanced version with improved mounting system",
      features: ["Enhanced LED System", "Premium Mounting", "3 Year Warranty"],
      category: "Professional"
    },
    {
      name: "EdgeLuxe 5",
      description: "Industrial-grade solution for large installations",
      features: ["High-Output LED", "Industrial Mounting", "5 Year Warranty"],
      category: "Industrial"
    },
    {
      name: "EdgeLuxe LP 11-F",
      description: "Front-lit channel letters with superior brightness",
      features: ["Front Illumination", "Professional Grade", "3 Year Warranty"],
      category: "Illuminated"
    },
    {
      name: "EdgeLuxe LP 11-B",
      description: "Back-lit halo effect channel letters",
      features: ["Halo Illumination", "Elegant Design", "3 Year Warranty"],
      category: "Illuminated"
    },
    {
      name: "EdgeLuxe LP 11-FS",
      description: "Front-lit with special mounting system",
      features: ["Front Illumination", "Special Mounting", "3 Year Warranty"],
      category: "Illuminated"
    },
    {
      name: "EdgeLuxe LP 11-BS",
      description: "Back-lit with special halo effects",
      features: ["Special Halo Effect", "Premium Design", "3 Year Warranty"],
      category: "Illuminated"
    },
    {
      name: "EdgeLuxe LP 11-N",
      description: "Non-illuminated precision channel letters",
      features: ["No Illumination", "Clean Design", "2 Year Warranty"],
      category: "Non-Illuminated"
    },
    {
      name: "EdgeLuxe LP 11-C",
      description: "Custom illumination options",
      features: ["Custom LED Config", "Flexible Design", "3 Year Warranty"],
      category: "Custom"
    },
    {
      name: "EdgeLuxe LP 11-FB",
      description: "Front and back illumination combination",
      features: ["Dual Illumination", "Maximum Impact", "3 Year Warranty"],
      category: "Premium"
    }
  ];

  const categories = ["All", "Essential", "Professional", "Industrial", "Illuminated", "Non-Illuminated", "Custom", "Premium"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Navigation />
      
      {/* Condensed Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden pt-20">
        {/* Animated Mesh Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'var(--gradient-mesh)',
            transform: `translateY(${parallaxOffset * 0.2}px)`
          }}
        />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial opacity-15" />
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-center w-full">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">UL Listed</span>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Professional Grade</span>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">LED Technology</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black">
                  <span className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    EdgeLuxe
                  </span>
                  <span className="block text-3xl lg:text-5xl text-muted-foreground">
                    Product Collection
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover our complete range of premium channel letters, from entry-level solutions to 
                  <span className="text-primary font-semibold"> industrial-grade installations</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <Eye className="w-5 h-5 mr-2" />
                  View Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section className="py-12 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.name}
                className={`group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/50 ${
                  product.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-card to-primary/5' : 'bg-card/50'
                } backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    {product.featured && (
                      <div className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-primary font-medium uppercase tracking-wide">
                    {product.category}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-border/50 hover:border-primary/50"
                    >
                      Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Need Custom Solutions?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our engineering team can create custom channel letter solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Contact Engineering Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;