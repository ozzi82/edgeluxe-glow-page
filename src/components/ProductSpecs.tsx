import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductSpecs = () => {
  const keyFeatures = [
    "Halo illuminated from the back with standoff spacers",
    "LEDs arranged to avoid reflection of diodes on mounting surface",
    "Painted in any PMS color with colorful halo effect options",
    "Vinyls or pigmented translucent acrylics for colorful halo effects",
    "Serviceable LEDs for easy maintenance",
    "3-year warranty included",
    "UL Listed certification"
  ];

  const specifications = [
    { label: "Materials", value: "Fabricated Stainless Steel" },
    { label: "Illumination", value: "Halo from back with standoffs" },
    { label: "Depths", value: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")' },
    { label: "Customization", value: "Any PMS color, vinyls or pigmented translucent acrylics for colorful halo effects" },
    { label: "Stroke Width", value: 'Minimum 15mm (0.6") for stability and even illumination' },
    { label: "Minimum Height", value: '50mm (2")' },
    { label: "Maintenance", value: "Serviceable LEDs" },
    { label: "Warranty", value: "3 years" },
    { label: "Certification", value: "UL Listed" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Key Features */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Key Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-1 gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <dt className="font-medium text-muted-foreground text-sm">
                      {spec.label}:
                    </dt>
                    <dd className="font-semibold text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;