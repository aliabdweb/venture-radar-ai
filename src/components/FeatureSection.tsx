import { Card, CardContent } from "@/components/ui/card";
import { Database, Zap, BarChart3, MailOpen } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Database className="h-10 w-10 text-venture-purple" />,
      title: "Comprehensive VC Database",
      description: "Access detailed information on thousands of VC firms with our extensive database. Easily search, filter, and organize VCs based on multiple parameters."
    },
    {
      icon: <Zap className="h-10 w-10 text-venture-purple" />,
      title: "AI-Powered Crawler",
      description: "Our intelligent system automatically discovers, subscribes to, and verifies newsletter subscriptions using advanced AI technology."
    },
    {
      icon: <MailOpen className="h-10 w-10 text-venture-purple" />,
      title: "Smart Email Processing",
      description: "Automated monitoring and intelligent filtering of newsletter content, with AI-driven categorization and sentiment analysis."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-venture-purple" />,
      title: "Personalized Digests",
      description: "Receive tailored newsletter content based on your specific interests, investment focus, and preferences."
    }
  ];

  return (
    <section id="features" className="py-16 px-4 md:py-24 bg-gray-50/70 hero-pattern">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Powerful Features for VC Intelligence</h2>
          <p className="text-lg text-venture-gray max-w-2xl mx-auto">
            Our platform offers a comprehensive suite of tools designed to transform how you consume VC intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  index: number
}) => {
  return (
    <Card className="card-glow border bg-white overflow-hidden animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
      <CardContent className="p-6 flex items-start gap-4">
        <div className="p-3 bg-venture-purple/10 rounded-full shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-venture-gray">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureSection;
