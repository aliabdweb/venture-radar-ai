import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 px-4 overflow-hidden hero-pattern">
      {/* Purple gradient shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-venture-purple/10 rounded-full blur-[100px] -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-venture-purple-light/10 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-venture-purple/5 rounded-full blur-[60px] -z-10 animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-venture-purple/10 rounded-full text-venture-purple-dark text-sm font-medium mb-6 animate-fade-in">
              Redefining VC Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">AI-Powered</span> VC Intelligence Platform
            </h1>
            <p className="text-lg md:text-xl text-venture-gray mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Aggregated newsletter intelligence from thousands of VCs, delivered in a personalized digest tailored to your specific interests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/login">
                <Button className="bg-venture-purple hover:bg-venture-purple-dark text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:shadow-venture-purple/20 transform hover:-translate-y-1 transition-all">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" className="border-venture-purple text-venture-purple hover:bg-venture-purple hover:text-white group flex items-center gap-2 text-lg px-8 py-6 h-auto transform hover:-translate-y-1 transition-all duration-300">
                Watch Demo
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">SE</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">KT</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">JL</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">MR</div>
              </div>
              <p className="text-sm text-venture-gray">
                Trusted by <span className="font-bold text-venture-dark">500+</span> companies
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full md:w-1/2 animate-fade-in-slow">
            <div className="relative bg-white rounded-lg shadow-xl p-4 md:p-6 gradient-border hover:shadow-2xl hover:shadow-venture-purple/10 transition-all duration-500">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-4">
                  <div className="h-24 bg-gray-100 rounded-md animate-pulse-subtle"></div>
                  <div className="h-36 bg-venture-purple/10 rounded-md"></div>
                  <div className="h-24 bg-gray-100 rounded-md"></div>
                </div>
                <div className="col-span-2 space-y-4">
                  <div className="h-16 bg-venture-purple/5 rounded-md"></div>
                  <div className="h-48 bg-gray-100 rounded-md animate-pulse-subtle"></div>
                  <div className="h-20 bg-venture-purple/10 rounded-md"></div>
                </div>
              </div>
              
              {/* Dashboard elements */}
              <div className="absolute top-12 right-12 w-1/3 h-24 bg-white shadow-lg rounded-lg p-3 animate-float hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full bg-venture-purple/20 flex items-center justify-center">
                    <span className="text-xs text-venture-purple font-semibold">VC</span>
                  </div>
                  <div className="w-12 h-3 bg-gray-200 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-1/2 h-2 bg-venture-purple/30 rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-14 w-1/4 h-20 bg-white shadow-lg rounded-lg p-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-6 h-6 rounded-full bg-venture-purple mb-2 flex items-center justify-center">
                  <span className="text-[10px] text-white font-semibold">A</span>
                </div>
                <div className="space-y-1.5">
                  <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-2/3 h-2 bg-venture-purple/30 rounded-full"></div>
                </div>
              </div>
              
              {/* New floating element */}
              <div className="absolute top-32 left-10 w-1/5 h-16 bg-white shadow-lg rounded-lg p-2 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center space-x-1 mb-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-[8px] text-venture-gray">Active</div>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-4/5 h-1.5 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
