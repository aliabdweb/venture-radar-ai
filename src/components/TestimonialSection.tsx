
import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO, TechVentures",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "VentureRadar has transformed how I stay informed about VC activities. Their personalized digests have helped us identify the right investors for our Series A round."
    },
    {
      name: "Michael Chen",
      role: "Partner, Horizon Capital",
      image: "https://randomuser.me/api/portraits/men/92.jpg",
      quote: "As an investor, staying on top of market trends is crucial. VentureRadar delivers the most relevant intelligence directly to my inbox, saving me hours of research time."
    },
    {
      name: "Elena Rodriguez",
      role: "Innovation Director, Global Corp",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "The AI-powered filtering is remarkable. We've discovered multiple partnership opportunities through VentureRadar that we would have otherwise missed."
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Our Clients Say</h2>
          <p className="text-lg text-venture-gray max-w-2xl mx-auto">
            Join hundreds of satisfied professionals who trust VentureRadar for their VC intelligence needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
            />
          ))}
        </div>
        
        {/* Logos */}
        <div className="mt-20">
          <p className="text-center text-venture-gray mb-10">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="h-12 w-24 bg-gray-200 rounded opacity-50"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  name, 
  role, 
  image, 
  quote 
}: { 
  name: string, 
  role: string, 
  image: string, 
  quote: string 
}) => {
  return (
    <Card className="card-glow border bg-white">
      <CardContent className="p-6 flex flex-col">
        <div className="mb-6">
          {/* Quote marks */}
          <svg className="h-8 w-8 text-venture-purple/20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
          </svg>
        </div>
        
        <p className="text-venture-gray mb-6">{quote}</p>
        
        <div className="mt-auto flex items-center gap-4">
          <img src={image} alt={name} className="h-12 w-12 rounded-full" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-venture-gray">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialSection;
