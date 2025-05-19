
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Free Trial",
      price: isAnnual ? "0" : "0",
      duration: "14 days",
      description: "Perfect for evaluating our platform",
      features: [
        "Access to daily newsletter",
        "Limited to 5 sectors of interest",
        "Basic personalization",
        "Standard support"
      ],
      cta: "Start Free Trial",
      highlight: false
    },
    {
      name: "Basic Plan",
      price: isAnnual ? "180" : "19",
      duration: isAnnual ? "/year" : "/month",
      description: "Essential features for individuals",
      features: [
        "Daily or weekly newsletter",
        "Up to 10 sectors of interest",
        "Standard personalization",
        "30-day content archive",
        "Priority email support"
      ],
      cta: "Choose Basic",
      highlight: true
    },
    {
      name: "Premium Plan",
      price: isAnnual ? "480" : "49",
      duration: isAnnual ? "/year" : "/month",
      description: "Advanced features for professionals",
      features: [
        "Daily, weekly, or custom-scheduled newsletters",
        "Unlimited sectors of interest",
        "Advanced personalization",
        "Full content archive",
        "Custom alerts for specific VCs or sectors",
        "API access",
        "Priority phone & email support"
      ],
      cta: "Choose Premium",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 md:py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h2>
          <p className="text-lg text-venture-gray max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees or long-term commitments.
          </p>
          
          <div className="flex items-center justify-center mt-8 gap-3">
            <span className={`text-sm ${!isAnnual ? 'font-medium text-venture-purple' : 'text-venture-gray'}`}>Monthly</span>
            <Switch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual} 
              className="data-[state=checked]:bg-venture-purple" 
            />
            <span className={`text-sm ${isAnnual ? 'font-medium text-venture-purple' : 'text-venture-gray'}`}>
              Annual <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              price={plan.price}
              duration={plan.duration}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              highlight={plan.highlight}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-venture-gray mb-2">Need a custom solution?</p>
          <a href="#" className="text-venture-purple font-semibold hover:underline">Contact us for enterprise pricing</a>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ 
  name, 
  price, 
  duration, 
  description, 
  features, 
  cta,
  highlight
}: { 
  name: string, 
  price: string, 
  duration: string, 
  description: string, 
  features: string[],
  cta: string,
  highlight: boolean
}) => {
  return (
    <Card className={`border overflow-hidden relative ${highlight ? 'shadow-highlight' : ''}`}>
      {highlight && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-venture-purple to-venture-purple-light text-white text-center text-sm py-1">
          Most Popular
        </div>
      )}
      
      <CardHeader className={highlight ? 'pt-10' : ''}>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-venture-gray ml-1">{duration}</span>
          </div>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-venture-purple mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className={`w-full ${highlight ? 'bg-venture-purple hover:bg-venture-purple-dark' : ''}`}
          variant={highlight ? 'default' : 'outline'}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingSection;
