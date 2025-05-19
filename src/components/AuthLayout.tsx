
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Mock authentication - in a real app, this would use proper auth
const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden absolute top-4 left-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
};

export default AuthLayout;
