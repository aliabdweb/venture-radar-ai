import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">VentureRadar</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/#features" className="text-venture-dark hover:text-venture-purple transition-colors">Features</Link>
            <Link to="/#pricing" className="text-venture-dark hover:text-venture-purple transition-colors">Pricing</Link>
            <Link to="/#testimonials" className="text-venture-dark hover:text-venture-purple transition-colors">Testimonials</Link>
            <Link to="/login">
              <Button variant="outline" className="border-venture-purple text-venture-purple hover:bg-venture-purple hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-venture-purple hover:bg-venture-purple-dark text-white">
                Get Started
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/#features" 
                className="text-venture-dark hover:text-venture-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/#pricing" 
                className="text-venture-dark hover:text-venture-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-venture-dark hover:text-venture-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-venture-purple text-venture-purple hover:bg-venture-purple hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-venture-purple hover:bg-venture-purple-dark text-white">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
