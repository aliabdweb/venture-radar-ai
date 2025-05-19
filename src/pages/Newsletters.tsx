
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  RefreshCw, 
  Filter,
  Mail, 
  Calendar,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock newsletter data
const mockNewsletters = [
  {
    id: 1,
    subject: "Sequoia Capital Monthly Update - May 2023",
    vcName: "Sequoia Capital",
    receivedDate: "2023-05-15T10:00:00Z",
    summary: "Updates on portfolio companies, market trends, and investment thesis for Q2 2023.",
    sentiment: "Positive",
    vcLogo: "https://via.placeholder.com/40x40"
  },
  {
    id: 2,
    subject: "Andreessen Horowitz Weekly Insights",
    vcName: "Andreessen Horowitz",
    receivedDate: "2023-05-14T14:30:00Z",
    summary: "Deep dive into fintech trends and emerging markets with a focus on blockchain technologies.",
    sentiment: "Neutral",
    vcLogo: "https://via.placeholder.com/40x40"
  },
  {
    id: 3,
    subject: "Y Combinator Batch Updates - Spring 2023",
    vcName: "Y Combinator",
    receivedDate: "2023-05-12T09:15:00Z",
    summary: "Latest startups from YC W23 batch and their progress, including fundraising and growth metrics.",
    sentiment: "Positive",
    vcLogo: "https://via.placeholder.com/40x40"
  },
  {
    id: 4,
    subject: "Accel Partners - Enterprise Tech Landscape",
    vcName: "Accel",
    receivedDate: "2023-05-10T11:45:00Z",
    summary: "Analysis of the changing enterprise technology landscape, with focus on AI/ML and cloud infrastructure.",
    sentiment: "Neutral",
    vcLogo: "https://via.placeholder.com/40x40"
  },
  {
    id: 5,
    subject: "Benchmark Capital - Consumer Market Slowdown",
    vcName: "Benchmark",
    receivedDate: "2023-05-08T16:20:00Z",
    summary: "Discussion of the consumer market slowdown and strategies for startups to navigate challenging conditions.",
    sentiment: "Negative",
    vcLogo: "https://via.placeholder.com/40x40"
  }
];

// Mock digests
const mockDigests = [
  {
    id: 101,
    title: "Daily Digest - May 15, 2023",
    date: "2023-05-15T18:00:00Z",
    newsletterCount: 6,
    vcCount: 5,
    summary: "Key highlights include new AI investments from Sequoia Capital and a market analysis from Andreessen Horowitz."
  },
  {
    id: 102,
    title: "Daily Digest - May 14, 2023",
    date: "2023-05-14T18:00:00Z",
    newsletterCount: 4,
    vcCount: 3,
    summary: "Focus on fintech innovations and blockchain advancements, with insights from multiple top-tier VCs."
  },
  {
    id: 103,
    title: "Daily Digest - May 13, 2023",
    date: "2023-05-13T18:00:00Z",
    newsletterCount: 8,
    vcCount: 7,
    summary: "Healthcare and biotech trends dominate today's digest, with several major funding announcements."
  }
];

const Newsletters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
    } finally {
      setRefreshing(false);
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
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold">Newsletters</h1>
          <p className="text-muted-foreground">
            Browse and search newsletters from tracked VC firms
          </p>
        </div>

        {/* Search and filters */}
        <Card className="shadow-sm">
          <CardContent className="py-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search newsletters..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button variant="outline" className="flex gap-2" onClick={handleRefresh} disabled={refreshing}>
                  {refreshing ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Refreshing...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      <span>Refresh</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter content */}
        <Tabs defaultValue="newsletters">
          <TabsList className="mb-4">
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
            <TabsTrigger value="digests">Digests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="newsletters">
            <div className="space-y-4">
              {mockNewsletters.map((newsletter) => (
                <Card key={newsletter.id} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-md bg-gray-100 flex-shrink-0 overflow-hidden">
                        {newsletter.vcLogo ? (
                          <img src={newsletter.vcLogo} alt={newsletter.vcName} className="w-full h-full object-cover" />
                        ) : (
                          <Mail className="h-6 w-6 m-2 text-gray-400" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="font-medium">{newsletter.subject}</h3>
                          <div className="text-sm text-gray-500 whitespace-nowrap">
                            {formatDate(newsletter.receivedDate)}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-venture-purple">{newsletter.vcName}</span>
                          <span className="text-gray-300">•</span>
                          {getSentimentBadge(newsletter.sentiment)}
                        </div>
                        
                        <p className="text-gray-600 mt-3">
                          {newsletter.summary}
                        </p>
                        
                        <div className="mt-4">
                          <Link to={`/newsletters/${newsletter.id}`}>
                            <Button variant="outline" size="sm">
                              View Details <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="digests">
            <div className="space-y-4">
              {mockDigests.map((digest) => (
                <Card key={digest.id} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-md bg-venture-purple bg-opacity-10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-venture-purple" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="font-medium">{digest.title}</h3>
                          <div className="text-sm text-gray-500">
                            {formatDate(digest.date)}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-2">
                          <div className="text-sm">
                            <span className="font-medium text-venture-purple">{digest.newsletterCount}</span> newsletters
                          </div>
                          <span className="text-gray-300">•</span>
                          <div className="text-sm">
                            <span className="font-medium text-venture-purple">{digest.vcCount}</span> VC firms
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mt-3">
                          {digest.summary}
                        </p>
                        
                        <div className="mt-4">
                          <Link to={`/digests/${digest.id}`}>
                            <Button variant="outline" size="sm">
                              View Digest <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default Newsletters;
