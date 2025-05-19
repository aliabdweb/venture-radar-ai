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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call for login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Check for special admin credentials
      let userRole = "user";
      if (email === "admin@demo.com") {
        userRole = "admin";
      }
      
      // Mock successful login
      const user = {
        name: userRole === "admin" ? "Admin User" : "Regular User",
        email: email,
        tier: "trial",
        role: userRole, // Set role based on email
        trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      };
      
      // Store user in localStorage (in a real app, store only the token)
      localStorage.setItem("user", JSON.stringify(user));
      
      toast({
        title: "Login Successful",
        description: "Welcome back to VentureRadar!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call for Google login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful Google login
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
        title: "Google Login Successful",
        description: "Welcome back to VentureRadar!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Google Login Failed",
        description: "An error occurred during Google login. Please try again.",
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
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-venture-purple rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-venture-purple-light rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold gradient-text">VentureRadar</h1>
          </Link>
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 mt-2">Sign in to access your account</p>
          <p className="text-xs text-gray-400 mt-1">
            For admin access use: admin@demo.com / password
            <br />
            For user access use: demo@demo.com / password
          </p>
        </div>

        <Card className="border-venture-purple-dark shadow-lg">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your email and password to sign in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Google login button */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <Mail className="h-4 w-4" />
              <span>Sign in with Google</span>
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-venture-purple hover:underline">
                      Forgot password?
                    </Link>
                  </div>
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
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
                </div>
              
                <Button
                  type="submit"
                  className="w-full bg-venture-purple hover:bg-venture-purple-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-venture-purple hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
