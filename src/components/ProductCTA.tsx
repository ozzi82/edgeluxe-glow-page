import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Download, Award, Users, Clock, Shield } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'var(--gradient-mesh)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ready to Illuminate
            </span>
            <br />
            <span className="text-foreground">Your Brand?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Join thousands of businesses who trust EdgeLuxe for their premium channel letter signage. 
            Get your custom quote today and experience the difference professional illumination makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
            >
              Get Custom Quote
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 border-border/50 hover:border-primary/50 hover:bg-card/50 backdrop-blur-sm transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now: (555) 123-4567
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Award, label: "UL Listed", value: "Certified" },
              { icon: Users, label: "Happy Clients", value: "10,000+" },
              { icon: Clock, label: "Years Experience", value: "25+" },
              { icon: Shield, label: "Warranty", value: "3 Years" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Mail,
              title: "Email Quote Request",
              description: "Send us your project details and receive a detailed quote within 24 hours",
              action: "Send Project Details",
              primary: false
            },
            {
              icon: Phone,
              title: "Speak to an Expert",
              description: "Talk directly with our channel letter specialists for immediate assistance",
              action: "Call (555) 123-4567",
              primary: true
            },
            {
              icon: Download,
              title: "Download Resources",
              description: "Get our complete catalog, installation guides, and technical specifications",
              action: "Download Catalog",
              primary: false
            }
          ].map((option, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-xl group ${
                option.primary 
                  ? 'bg-primary/10 border-primary/30 hover:border-primary/50 hover:shadow-primary/20' 
                  : 'bg-card/30 border-border/50 hover:border-primary/30 hover:shadow-primary/10'
              }`}
              style={{
                background: option.primary ? 'var(--gradient-primary)' : 'var(--gradient-card)'
              }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                option.primary ? 'bg-white/20' : 'bg-primary/10'
              }`}>
                <option.icon className={`w-8 h-8 ${option.primary ? 'text-white' : 'text-primary'}`} />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 ${option.primary ? 'text-white' : 'text-foreground'}`}>
                {option.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${option.primary ? 'text-white/90' : 'text-muted-foreground'}`}>
                {option.description}
              </p>
              
              <Button 
                className={`w-full ${
                  option.primary 
                    ? 'bg-white/20 hover:bg-white/30 text-white border-white/30' 
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}
                variant={option.primary ? "outline" : "default"}
              >
                {option.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background" />
              ))}
            </div>
            <span className="text-sm font-medium">
              Join 10,000+ businesses that chose EdgeLuxe for premium channel letters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;