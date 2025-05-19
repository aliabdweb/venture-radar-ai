
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    description: "Try VentureRadar for 14 days",
    features: [
      "Weekly newsletter digest",
      "Access to 2 sectors of interest",
      "Basic personalization",
      "7-day content archive"
    ],
    isRecommended: false,
    isCurrent: true,
    buttonText: "Current Plan"
  },
  {
    name: "Basic",
    price: "$19",
    period: "per month",
    description: "For solo entrepreneurs and investors",
    features: [
      "Daily or weekly newsletter",
      "Up to 10 sectors of interest",
      "Standard personalization",
      "30-day content archive",
      "Email notifications",
      "Basic analytics"
    ],
    isRecommended: false,
    isCurrent: false,
    buttonText: "Upgrade to Basic"
  },
  {
    name: "Premium",
    price: "$49",
    period: "per month",
    description: "For serious investors and teams",
    features: [
      "Custom-scheduled newsletters",
      "Unlimited sectors of interest",
      "Advanced personalization",
      "Full content archive",
      "Custom alerts for specific VCs",
      "Advanced analytics",
      "API access",
      "Priority support"
    ],
    isRecommended: true,
    isCurrent: false,
    buttonText: "Upgrade to Premium"
  }
];

const Subscription = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(userData);

    // Set current plan based on user data
    if (userData && userData.tier) {
      const updatedPlans = plans.map(plan => ({
        ...plan,
        isCurrent: plan.name.toLowerCase() === userData.tier
      }));
      
      // If the user is on a trial, update the trial plan
      if (userData.tier === "trial") {
        updatedPlans[0].isCurrent = true;
      }
    }
  }, []);

  const handleUpgrade = async (planName: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update local storage with new plan
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      userData.tier = planName.toLowerCase();
      localStorage.setItem("user", JSON.stringify(userData));
      
      toast({
        title: "Subscription Updated",
        description: `You've successfully upgraded to the ${planName} plan.`,
      });
      
      // Force reload to update UI
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  // Calculate days remaining for trial
  let trialDaysRemaining = 0;
  if (user.tier === "trial" && user.trialEndsAt) {
    const trialEnd = new Date(user.trialEndsAt);
    const now = new Date();
    trialDaysRemaining = Math.max(0, Math.ceil((trialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Subscription</h1>
        <p className="text-muted-foreground">
          Manage your VentureRadar subscription plan
        </p>

        {/* Trial notification */}
        {user.tier === "trial" && (
          <Card className="bg-gradient-to-r from-venture-purple-light to-venture-purple bg-opacity-10 border-venture-purple-light">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-venture-purple-dark text-lg">Your 14-day free trial is active</h3>
                  <p className="mt-1">
                    You have <span className="font-bold">{trialDaysRemaining} days</span> remaining in your trial period.
                    Upgrade now to ensure uninterrupted service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Current subscription details (for paid plans) */}
        {user.tier !== "trial" && (
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Current Subscription</CardTitle>
              <CardDescription>Details about your current plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500">Plan</div>
                  <div className="text-lg font-medium">{user.tier === "basic" ? "Basic" : "Premium"}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="text-lg font-medium">
                    {user.tier === "basic" ? "$19" : "$49"} <span className="text-sm text-gray-500">per month</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Next billing date</div>
                  <div className="text-lg font-medium">June 15, 2023</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Payment method</div>
                  <div className="text-lg font-medium">•••• 4242</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline">Update Payment Method</Button>
              <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700">
                Cancel Subscription
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Pricing plans */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`shadow-sm relative ${
                  plan.isRecommended 
                    ? "border-venture-purple shadow-venture-purple/10" 
                    : ""
                } ${
                  plan.isCurrent
                    ? "border-green-300 bg-green-50"
                    : ""
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute top-0 right-0 bg-venture-purple text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Recommended
                  </div>
                )}
                
                {plan.isCurrent && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Current Plan
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.isCurrent 
                        ? "bg-green-500 hover:bg-green-600 cursor-default"
                        : plan.isRecommended
                          ? "bg-venture-purple hover:bg-venture-purple-dark"
                          : ""
                    }`}
                    disabled={plan.isCurrent || loading}
                    onClick={() => handleUpgrade(plan.name)}
                  >
                    {plan.isCurrent ? "Current Plan" : plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional information */}
        <Card className="mt-6 bg-gray-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Need a custom plan?</h3>
            <p className="text-gray-600 mb-4">
              For enterprise solutions or custom requirements, please contact our sales team.
              We offer specialized plans for larger organizations.
            </p>
            <Link to="/contact">
              <Button variant="outline">Contact Sales</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default Subscription;
