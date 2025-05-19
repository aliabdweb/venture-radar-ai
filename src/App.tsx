
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import VCList from "./pages/VCList";
import VCDetail from "./pages/VCDetail";
import VCForm from "./pages/VCForm";
import Newsletters from "./pages/Newsletters";
import Settings from "./pages/Settings";
import Subscription from "./pages/Subscription";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Authenticated Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* VC Management Routes */}
          <Route path="/vcs" element={<VCList />} />
          <Route path="/vcs/:id" element={<VCDetail />} />
          <Route path="/vcs/new" element={<VCForm />} />
          <Route path="/vcs/:id/edit" element={<VCForm />} />
          
          {/* Newsletter Routes */}
          <Route path="/newsletters" element={<Newsletters />} />
          
          {/* Settings Routes */}
          <Route path="/settings" element={<Settings />} />
          
          {/* Subscription Routes */}
          <Route path="/subscription" element={<Subscription />} />
          
          {/* Team Routes */}
          <Route path="/team" element={<Team />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
