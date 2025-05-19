
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call for registration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful registration
      const user = {
        name: name,
        email: email,
        tier: "trial",
        role: "user", // Default role is user
        trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      };
      
      // Store user in localStorage (in a real app, store only the token)
      localStorage.setItem("user", JSON.stringify(user));
      
      toast({
        title: "Registration Successful",
        description: "Your 14-day free trial has started. Welcome to VentureRadar!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call for Google sign up
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful Google sign up
      const user = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        tier: "trial",
        role: "user", // Default role is user
        trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      };
      
      // Store user in localStorage (in a real app, store only the token)
      localStorage.setItem("user", JSON.stringify(user));
      
      toast({
        title: "Google Sign Up Successful",
        description: "Your 14-day free trial has started. Welcome to VentureRadar!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Google Sign Up Failed",
        description: "An error occurred during Google sign up. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-venture-dark p-4 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-venture-purple rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-venture-purple-light rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold gradient-text">VentureRadar</h1>
          </Link>
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
          <p className="text-gray-400 mt-2">Sign up to start your 14-day free trial</p>
        </div>

        <Card className="border-venture-purple-dark shadow-lg">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your details to create an account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Google sign up button */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGoogleSignUp}
              disabled={isLoading}
            >
              <Mail className="h-4 w-4" />
              <span>Sign up with Google</span>
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <Link to="/terms" className="text-venture-purple hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-venture-purple hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              
                <Button
                  type="submit"
                  className="w-full bg-venture-purple hover:bg-venture-purple-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-venture-purple hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
