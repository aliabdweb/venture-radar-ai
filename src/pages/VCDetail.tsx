
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Globe, 
  Mail, 
  Send, 
  Edit, 
  Trash2, 
  RefreshCw,
  CalendarDays,
  Building,
  DollarSign
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock VC data
const mockVC = {
  id: 1,
  name: "Sequoia Capital",
  website: "https://www.sequoiacap.com",
  logo: "https://via.placeholder.com/100x100",
  description: "Sequoia Capital is an American venture capital firm. The firm specializes in seed stage, early stage, and growth stage investments in private companies across technology sectors.",
  focus_areas: ["Fintech", "AI", "Enterprise", "Consumer", "Healthcare", "Crypto"],
  investment_stages: ["Series A", "Series B", "Growth"],
  location: "Menlo Park, California, USA",
  founded_year: 1972,
  portfolio_size: 300,
  fund_size: "$8B+",
  notable_investments: ["Apple", "Google", "Airbnb", "Stripe", "Zoom", "WhatsApp"],
  crawler_status: "Subscribed",
  last_crawl_attempt: "2023-05-18T14:30:00Z",
  crawl_notes: "Successfully subscribed to newsletter",
  newsletters: [
    {
      id: 101,
      subject: "Sequoia Capital Monthly Update - May 2023",
      received_date: "2023-05-15T10:00:00Z",
      summary: "Updates on portfolio companies, market trends, and investment thesis for Q2 2023.",
      sentiment: "Positive",
    },
    {
      id: 102,
      subject: "Sequoia Spotlight: AI Landscape in 2023",
      received_date: "2023-05-01T10:00:00Z",
      summary: "Deep dive into artificial intelligence trends and Sequoia's perspective on the market.",
      sentiment: "Neutral",
    },
    {
      id: 103,
      subject: "Sequoia Capital Monthly Update - April 2023",
      received_date: "2023-04-15T10:00:00Z",
      summary: "Insights on economic outlook, portfolio performance, and new investments.",
      sentiment: "Positive",
    }
  ]
};

const VCDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [vc, setVc] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate API fetch
    const fetchVC = async () => {
      setLoading(true);
      try {
        // In a real app, you'd fetch this from an API
        await new Promise(resolve => setTimeout(resolve, 500));
        setVc(mockVC);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load VC details",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchVC();
  }, [id, toast]);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Refresh Complete",
        description: "VC information updated successfully",
      });
    } catch (error) {
      toast({
        title: "Refresh Failed",
        description: "Could not update VC information",
        variant: "destructive",
      });
    } finally {
      setRefreshing(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this VC from your tracking list?")) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
          title: "VC Removed",
          description: "The VC has been removed from your tracking list",
        });
        navigate("/vcs");
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to remove VC",
          variant: "destructive",
        });
      }
    }
  };

  if (loading) {
    return (
      <AuthLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-venture-purple mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading VC details...</p>
          </div>
        </div>
      </AuthLayout>
    );
  }

  if (!vc) {
    return (
      <AuthLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">VC Not Found</h2>
          <p className="text-muted-foreground mb-6">The VC you're looking for doesn't exist or has been removed.</p>
          <Link to="/vcs">
            <Button className="bg-venture-purple hover:bg-venture-purple-dark">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to VC Directory
            </Button>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Subscribed":
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">Subscribed</span>;
      case "Pending":
        return <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">Pending</span>;
      case "Ready for Crawl":
        return <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">Ready for Crawl</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">Positive</span>;
      case "negative":
        return <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">Negative</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">Neutral</span>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Back button */}
        <div>
          <Link to="/vcs">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to VC Directory
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
              {vc.logo ? (
                <img src={vc.logo} alt={vc.name} className="w-full h-full object-cover" />
              ) : (
                <Building className="h-8 w-8 text-gray-400" />
              )}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{vc.name}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Globe className="h-4 w-4" />
                <a href={vc.website} target="_blank" rel="noopener noreferrer" className="hover:text-venture-purple">
                  {vc.website.replace('https://', '').replace('http://', '')}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={handleRefresh} disabled={refreshing}>
              {refreshing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Refreshing...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </>
              )}
            </Button>
            <Link to={`/vcs/${id}/edit`}>
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </Link>
            <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        {/* Status card */}
        <Card className="bg-gradient-to-r from-venture-dark to-venture-purple-dark text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-sm opacity-80">Crawler Status</div>
                <div className="text-xl font-medium mt-1 flex items-center">
                  {getStatusBadge(vc.crawler_status)}
                </div>
              </div>

              <div>
                <div className="text-sm opacity-80">Last Attempt</div>
                <div className="text-xl font-medium mt-1">
                  {formatDate(vc.last_crawl_attempt)}
                </div>
              </div>

              <div className="flex-1">
                <div className="text-sm opacity-80">Notes</div>
                <div className="text-sm mt-1 opacity-90">
                  {vc.crawl_notes}
                </div>
              </div>

              <div>
                <Button className="bg-white text-venture-purple-dark hover:bg-gray-100">
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* VC details */}
        <Tabs defaultValue="details">
          <TabsList className="mb-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletters ({vc.newsletters?.length || 0})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1 md:col-span-2 shadow-sm">
                <CardHeader>
                  <CardTitle>About {vc.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Description</h3>
                    <p className="text-gray-700">{vc.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Focus Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {vc.focus_areas.map((focus: string, i: number) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-venture-purple-light bg-opacity-20 text-venture-purple-dark rounded-full text-sm"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Investment Stages</h3>
                    <div className="flex flex-wrap gap-2">
                      {vc.investment_stages.map((stage: string, i: number) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {stage}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Notable Investments</h3>
                    <div className="flex flex-wrap gap-2">
                      {vc.notable_investments.map((company: string, i: number) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Building className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium">{vc.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <CalendarDays className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Founded</div>
                      <div className="font-medium">{vc.founded_year}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Mail className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Portfolio Size</div>
                      <div className="font-medium">{vc.portfolio_size}+ Companies</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Fund Size</div>
                      <div className="font-medium">{vc.fund_size}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="newsletters">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Newsletters</CardTitle>
                <CardDescription>Recent newsletters from {vc.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vc.newsletters && vc.newsletters.length > 0 ? (
                    vc.newsletters.map((newsletter: any) => (
                      <div 
                        key={newsletter.id} 
                        className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-medium">{newsletter.subject}</h3>
                            <div className="text-sm text-gray-500 mt-1">
                              Received on {formatDate(newsletter.received_date)}
                            </div>
                            <p className="text-gray-700 mt-2">{newsletter.summary}</p>
                          </div>
                          <div>{getSentimentBadge(newsletter.sentiment)}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Mail className="h-12 w-12 mx-auto text-gray-300" />
                      <h3 className="mt-4 font-medium">No Newsletters Yet</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Once the crawler subscribes to this VC's newsletter, content will appear here.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default VCDetail;
