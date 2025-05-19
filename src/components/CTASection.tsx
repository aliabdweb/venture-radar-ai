
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-venture-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-venture-purple rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-venture-purple-light rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your VC Intelligence?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Join hundreds of professionals who have already revolutionized how they stay informed about the venture capital ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-venture-purple hover:bg-venture-purple-dark group flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Start your 14-day free trial. No credit card required.
          </p>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <TrustItem value="500+" label="Companies" />
            <TrustItem value="15,000+" label="Newsletters Processed" />
            <TrustItem value="98%" label="Customer Satisfaction" />
            <TrustItem value="2,500+" label="VC Firms Covered" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustItem = ({ value, label }: { value: string, label: string }) => {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-venture-purple-light mb-2">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
};

export default CTASection;
