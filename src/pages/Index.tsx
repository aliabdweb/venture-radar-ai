import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Database, BarChart3, MailOpen, CheckCircle, Zap, Shield, Users } from "lucide-react";

// Create components for landing page
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      
      {/* Main Features */}
      <section id="features" className="py-16 px-4 md:py-24 bg-gray-50/70 hero-pattern">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Harness the Power of AI for VC Intelligence</h2>
            <p className="text-lg text-venture-gray max-w-2xl mx-auto">
              VentureRadar aggregates and analyzes VC newsletters, providing you with filtered, 
              personalized insights tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Database className="h-10 w-10 text-venture-purple" />}
              title="VC Database"
              description="Comprehensive database of VC firms with detailed metadata, manual and bulk import capabilities."
            />
            
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-venture-purple" />}
              title="AI Crawler"
              description="Automated newsletter subscription system powered by advanced AI models."
            />
            
            <FeatureCard 
              icon={<MailOpen className="h-10 w-10 text-venture-purple" />}
              title="Email Monitoring"
              description="Intelligent email processing with content extraction and categorization."
            />
            
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10 text-venture-purple" />}
              title="Personalized Digests"
              description="Curated newsletters with content tailored to your specific interests and needs."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 md:py-24">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How VentureRadar Works</h2>
            <p className="text-lg text-venture-gray max-w-2xl mx-auto">
              Our intelligent platform handles the entire process from data collection to personalized delivery.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="collect" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="collect">Collect</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="deliver">Deliver</TabsTrigger>
              </TabsList>
              
              <TabsContent value="collect" className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-venture-dark">Automated Data Collection</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>AI-powered crawler identifies and subscribes to VC newsletters</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>Import existing VC databases via Excel</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>Continuous monitoring of thousands of sources</span>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-venture-purple/5 h-64 rounded-lg flex items-center justify-center shadow-md">
                        <div className="w-3/4 h-4/5 bg-white rounded-md shadow-lg p-4 flex flex-col">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-venture-purple rounded-full flex items-center justify-center">
                              <Database className="h-4 w-4 text-white" />
                            </div>
                            <div className="ml-3 text-venture-dark font-semibold">Data Collection</div>
                          </div>
                          <div className="space-y-2 flex-grow">
                            <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                            <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                            <div className="h-3 bg-gray-100 rounded-full w-4/6"></div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <div className="w-20 h-6 bg-venture-purple/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="process" className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-venture-dark">Intelligent Processing</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>AI content analysis and categorization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>Entity extraction and relationship mapping</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>Sentiment analysis and trend identification</span>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-venture-purple/5 h-64 rounded-lg flex items-center justify-center shadow-md">
                        <div className="w-3/4 h-4/5 bg-white rounded-md shadow-lg p-4 flex flex-col">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-venture-purple rounded-full flex items-center justify-center">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                            <div className="ml-3 text-venture-dark font-semibold">AI Processing</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 flex-grow">
                            <div className="col-span-1 space-y-2">
                              <div className="h-12 bg-venture-purple/10 rounded-md"></div>
                              <div className="h-12 bg-venture-purple/10 rounded-md"></div>
                            </div>
                            <div className="col-span-2 space-y-2">
                              <div className="h-6 bg-gray-100 rounded-md"></div>
                              <div className="h-6 bg-gray-100 rounded-md"></div>
                              <div className="h-12 bg-venture-purple/5 rounded-md"></div>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <div className="w-20 h-6 bg-venture-purple/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="deliver" className="animate-fade-in">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-venture-dark">Personalized Delivery</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>Curated digests based on your preferences</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>Flexible delivery schedules (daily, weekly, custom)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-venture-purple mt-1" />
                            <span>Actionable insights and summaries</span>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-venture-purple/5 h-64 rounded-lg flex items-center justify-center shadow-md">
                        <div className="w-3/4 h-4/5 bg-white rounded-md shadow-lg p-4 flex flex-col">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-venture-purple rounded-full flex items-center justify-center">
                              <MailOpen className="h-4 w-4 text-white" />
                            </div>
                            <div className="ml-3 text-venture-dark font-semibold">Digest Delivery</div>
                          </div>
                          <div className="space-y-2 flex-grow">
                            <div className="h-8 bg-venture-purple/5 rounded-md flex items-center px-3">
                              <div className="w-6 h-6 rounded-full bg-venture-purple/20 mr-2"></div>
                              <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                            </div>
                            <div className="h-12 bg-gray-100 rounded-md"></div>
                            <div className="h-8 bg-venture-purple/5 rounded-md"></div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <div className="w-20 h-6 bg-venture-purple/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 md:py-24 bg-venture-dark text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VentureRadar</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our platform offers unparalleled advantages for professionals in the venture capital ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Zap className="h-8 w-8 text-venture-purple-light" />}
              title="Save Time"
              description="Eliminate manual newsletter management and get curated insights delivered directly to your inbox."
            />
            
            <BenefitCard 
              icon={<Shield className="h-8 w-8 text-venture-purple-light" />}
              title="Stay Informed"
              description="Never miss critical market developments or investment opportunities again."
            />
            
            <BenefitCard 
              icon={<Users className="h-8 w-8 text-venture-purple-light" />}
              title="Gain Competitive Edge"
              description="Access insights and trends from thousands of VCs in one centralized platform."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialSection />
      </section>
      
      {/* Pricing */}
      <section id="pricing">
        <PricingSection />
      </section>
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="card-glow border bg-white overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-venture-purple/10 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-venture-gray">{description}</p>
      </CardContent>
    </Card>
  );
};

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-venture-purple/10 group">
      <div className="mb-4 group-hover:transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-venture-purple-light transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Index;
