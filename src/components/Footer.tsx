
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Case Studies", href: "#" },
      { name: "Reviews", href: "#testimonials" },
      { name: "Updates", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Community", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-venture-purple to-venture-purple-light flex items-center justify-center shadow-sm">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-lg font-bold text-venture-dark">VentureRadar</span>
            </div>
            <p className="text-venture-gray mb-4 max-w-xs">
              The AI-powered platform for VC intelligence, streamlining newsletter management and content delivery.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Twitter size={18} />} name="twitter" />
              <SocialIcon icon={<Linkedin size={18} />} name="linkedin" />
              <SocialIcon icon={<Facebook size={18} />} name="facebook" />
              <SocialIcon icon={<Instagram size={18} />} name="instagram" />
              <SocialIcon icon={<Github size={18} />} name="github" />
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-venture-gray hover:text-venture-purple transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-venture-gray hover:text-venture-purple transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-venture-gray hover:text-venture-purple transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-venture-gray hover:text-venture-purple transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-venture-gray text-sm mb-4 md:mb-0">
            © {currentYear} VentureRadar. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="link" className="text-venture-gray hover:text-venture-purple p-0 h-auto">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-venture-gray hover:text-venture-purple p-0 h-auto">
              Terms of Service
            </Button>
            <Button variant="link" className="text-venture-gray hover:text-venture-purple p-0 h-auto">
              Cookie Preferences
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, name }: { icon: React.ReactNode, name: string }) => {
  return (
    <a 
      href="#" 
      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-venture-purple/10 hover:text-venture-purple transition-colors"
      aria-label={name}
    >
      {icon}
    </a>
  );
};

export default Footer;
