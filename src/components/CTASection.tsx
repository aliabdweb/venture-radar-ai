
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, we would submit to backend here
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 md:py-24 bg-venture-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-venture-purple rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-venture-purple-light rounded-full blur-[120px]"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container max-w-5xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your VC Intelligence?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Join hundreds of professionals who have already revolutionized how they stay informed about the venture capital ecosystem.
          </p>
          
          <form onSubmit={handleSubmit} className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-venture-purple focus:border-venture-purple"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                className="bg-venture-purple hover:bg-venture-purple-dark group flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-venture-purple/20 transition-all"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-gray-400 mb-3">
              Already have an account?{" "}
              <Link to="/login" className="text-venture-purple-light hover:underline">
                Sign in
              </Link>
            </p>
            <p className="text-sm text-gray-400">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
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
    <div className="text-center group hover:transform hover:scale-110 transition-all duration-300 cursor-default">
      <div className="text-2xl md:text-3xl font-bold text-venture-purple-light mb-2 group-hover:text-white transition-colors">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
};

export default CTASection;
