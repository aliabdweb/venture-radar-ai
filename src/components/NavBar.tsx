
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-venture-purple to-venture-purple-light flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className="text-xl font-bold text-venture-dark">VentureRadar</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-venture-gray hover:text-venture-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-venture-gray hover:text-venture-purple transition-colors">How It Works</a>
          <a href="#pricing" className="text-venture-gray hover:text-venture-purple transition-colors">Pricing</a>
          <a href="#testimonials" className="text-venture-gray hover:text-venture-purple transition-colors">Testimonials</a>
        </nav>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-venture-purple text-venture-purple hover:bg-venture-purple hover:text-white">
            Sign In
          </Button>
          <Button className="bg-venture-purple hover:bg-venture-purple-dark text-white">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-venture-gray">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-10">
              <a href="#features" className="text-lg font-medium hover:text-venture-purple">Features</a>
              <a href="#how-it-works" className="text-lg font-medium hover:text-venture-purple">How It Works</a>
              <a href="#pricing" className="text-lg font-medium hover:text-venture-purple">Pricing</a>
              <a href="#testimonials" className="text-lg font-medium hover:text-venture-purple">Testimonials</a>
              
              <div className="flex flex-col gap-3 mt-6">
                <Button variant="outline" className="border-venture-purple text-venture-purple hover:bg-venture-purple hover:text-white w-full">
                  Sign In
                </Button>
                <Button className="bg-venture-purple hover:bg-venture-purple-dark text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
