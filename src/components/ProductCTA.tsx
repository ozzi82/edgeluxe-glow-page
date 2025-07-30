import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Download, Calculator } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our team of experts for a custom quote and professional consultation
            for your channel letter project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Speak with our experts
              </p>
              <Button variant="outline" size="sm" className="w-full">
                (555) 123-4567
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Quote</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get detailed pricing
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Send Specs
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Download Catalog</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete product line
              </p>
              <Button variant="outline" size="sm" className="w-full">
                PDF Download
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Price Calculator</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Instant estimates
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Calculate
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-12 py-6 mb-4">
            Request Custom Quote
          </Button>
          <p className="text-sm text-muted-foreground">
            Free consultation • Fast turnaround • Professional installation support
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;