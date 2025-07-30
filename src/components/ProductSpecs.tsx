import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProductSpecs = () => {
  const specifications = [
    {
      category: "Construction",
      specs: [
        { label: "Material", value: "316L Stainless Steel" },
        { label: "Finish", value: "Brushed Satin" },
        { label: "Letter Depth", value: "4 inches (101.6mm)" },
        { label: "Wall Thickness", value: "0.062\" (1.57mm)" },
        { label: "Mounting", value: "Standoff System" }
      ]
    },
    {
      category: "Illumination",
      specs: [
        { label: "LED Type", value: "High-Efficiency Modules" },
        { label: "Lumens", value: "2,400 LM" },
        { label: "Color Temp", value: "3000K-6500K" },
        { label: "CRI", value: ">90" },
        { label: "Lifespan", value: "50,000+ Hours" }
      ]
    },
    {
      category: "Electrical",
      specs: [
        { label: "Input Voltage", value: "120-277V AC" },
        { label: "Power Draw", value: "25W per linear foot" },
        { label: "Driver", value: "Class 2 LED Driver" },
        { label: "Dimming", value: "0-10V Compatible" },
        { label: "IP Rating", value: "IP65 (Weather Resistant)" }
      ]
    },
    {
      category: "Environmental",
      specs: [
        { label: "Operating Temp", value: "-40°F to 185°F" },
        { label: "Humidity", value: "0-95% RH" },
        { label: "UV Resistance", value: "Excellent" },
        { label: "Wind Load", value: "150 mph rated" },
        { label: "Salt Spray", value: "ASTM B117 Compliant" }
      ]
    },
    {
      category: "Certifications",
      specs: [
        { label: "UL Listed", value: "48 & wet location" },
        { label: "Energy Star", value: "Qualified" },
        { label: "RoHS", value: "Compliant" },
        { label: "FCC", value: "Part 15 Class B" },
        { label: "Warranty", value: "3 Years Standard" }
      ]
    }
  ];

  const features = [
    "Halo-lit illumination effect",
    "Precision laser-cut letters",
    "Anti-corrosive coating",
    "Modular LED system",
    "Professional installation kit",
    "Remote monitoring capable"
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(-45deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Specifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered for excellence. Every specification meets or exceeds industry standards 
            for commercial-grade channel letter signage.
          </p>
        </div>

        {/* Features Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {specifications.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="p-8 bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              style={{
                background: 'var(--gradient-card)'
              }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground text-sm">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-foreground text-sm">
                        {spec.value}
                      </span>
                    </div>
                    {specIndex < category.specs.length - 1 && (
                      <Separator className="opacity-30" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="text-sm font-medium">All specifications are guaranteed and UL Listed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;