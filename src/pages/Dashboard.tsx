
import { useState, useEffect } from "react";
import AuthLayout from "@/components/AuthLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, List, Mail, Users, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for stats
const mockStats = [
  { 
    id: 1, 
    title: "VCs Tracked", 
    value: "1,248", 
    change: "+12% from last month", 
    icon: List,
    color: "bg-purple-100 text-venture-purple"
  },
  { 
    id: 2, 
    title: "Newsletters Processed", 
    value: "15,873", 
    change: "+27% from last month", 
    icon: Mail,
    color: "bg-blue-100 text-blue-600"
  },
  { 
    id: 3, 
    title: "Team Members", 
    value: "3", 
    change: "Invite more members", 
    icon: Users,
    color: "bg-amber-100 text-amber-600"
  },
  { 
    id: 4, 
    title: "Subscription Status", 
    value: "Trial", 
    change: "13 days remaining", 
    icon: CreditCard,
    color: "bg-green-100 text-green-600"
  }
];

// Mock data for recent newsletters
const mockNewsletters = [
  { 
    id: 1, 
    title: "Sequoia Capital Monthly Update", 
    date: "2 hours ago", 
    summary: "Focus on AI startups and market analysis for Q2 2023" 
  },
  { 
    id: 2, 
    title: "Andreessen Horowitz Weekly Insights", 
    date: "Yesterday", 
    summary: "Deep dive into fintech trends and emerging markets" 
  },
  { 
    id: 3, 
    title: "Y Combinator Batch Updates", 
    date: "2 days ago", 
    summary: "Latest startups from YC W23 batch and their progress" 
  }
];

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(userData);
  }, []);

  if (!user) return null;

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.name}! Here's an overview of your VentureRadar.
          </p>
          
          {/* Trial notification */}
          {user.tier === "trial" && (
            <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-venture-purple-light to-venture-purple bg-opacity-10 border border-venture-purple-light">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-venture-purple-dark">You're on a 14-day free trial</h3>
                  <p className="text-sm">Upgrade now to unlock all premium features and continue your service.</p>
                </div>
                <Link to="/subscription">
                  <Button className="bg-white text-venture-purple hover:bg-gray-100">
                    Upgrade Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockStats.map((stat) => (
            <Card key={stat.id} className="shadow-sm transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-md ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent newsletters */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recent Newsletters</CardTitle>
            <CardDescription>The latest newsletters from your tracked VCs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockNewsletters.map((newsletter) => (
                <div key={newsletter.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-venture-purple-light flex items-center justify-center text-venture-purple">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{newsletter.title}</h4>
                      <span className="text-xs text-gray-500">{newsletter.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{newsletter.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/newsletters">
                <Button variant="outline" className="w-full">
                  View All Newsletters
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Add New VC</CardTitle>
              <CardDescription>Track a new venture capital firm</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Add a new VC firm to your tracking list to receive their newsletters and updates.
              </p>
              <Link to="/vcs/new">
                <Button className="bg-venture-purple hover:bg-venture-purple-dark">
                  Add VC <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Browse VCs</CardTitle>
              <CardDescription>Explore your tracked VCs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Browse through all the VC firms you're currently tracking and their details.
              </p>
              <Link to="/vcs">
                <Button className="bg-venture-purple hover:bg-venture-purple-dark">
                  Browse VCs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Manage Subscription</CardTitle>
              <CardDescription>Update your plan or billing details</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Change your subscription plan, update payment methods, or view billing history.
              </p>
              <Link to="/subscription">
                <Button className="bg-venture-purple hover:bg-venture-purple-dark">
                  Manage Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
