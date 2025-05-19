
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Building, Tag, ThumbsUp, ThumbsDown, ArrowUpRight, Mail } from "lucide-react";

// Interface for newsletter data
interface Newsletter {
  id: number;
  subject: string;
  vcName: string;
  vcLogo?: string;
  receivedDate: string;
  content: string;
  summary: string;
  sentiment: string;
  keyTopics: string[];
  mentionedCompanies: Company[];
  attachments?: Attachment[];
}

interface Company {
  name: string;
  description: string;
  fundingStage?: string;
}

interface Attachment {
  name: string;
  type: string;
  size: string;
  url: string;
}

const NewsletterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newsletter, setNewsletter] = useState<Newsletter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletter = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for specific newsletter
        const mockNewsletter: Newsletter = {
          id: Number(id),
          subject: "Sequoia Capital Monthly Update - May 2023",
          vcName: "Sequoia Capital",
          vcLogo: "https://via.placeholder.com/64x64",
          receivedDate: "2023-05-15T10:00:00Z",
          content: `<p>Dear Limited Partners,</p>
          <p>We are excited to share our monthly update for May 2023. In this edition, we cover recent market trends, portfolio company highlights, and our investment outlook for the coming quarter.</p>
          <h2>Market Observations</h2>
          <p>The AI sector continues to show tremendous growth with investments increasing by 45% compared to the previous quarter. We're seeing particular interest in generative AI applications across various industries.</p>
          <p>The fintech space is experiencing some consolidation, with several notable acquisitions taking place in April. We expect this trend to continue as companies seek to strengthen their market positions.</p>
          <h2>Portfolio Highlights</h2>
          <p>TechCorp recently completed their Series C funding round, raising $120M at a $1.5B valuation. Their AI-powered analytics platform has gained significant traction in the enterprise market.</p>
          <p>HealthAI has expanded into three new international markets this quarter, bringing their total global footprint to 15 countries. Their patient monitoring system is now used in over 500 hospitals worldwide.</p>
          <h2>Investment Thesis</h2>
          <p>We remain bullish on AI infrastructure and tooling companies that enable the next wave of applications. We've increased our allocation to this sub-sector by 20%.</p>
          <p>We're also closely monitoring opportunities in climate tech, particularly companies focused on carbon capture and sustainable materials. We expect this to be a major growth area over the next decade.</p>
          <h2>Upcoming Events</h2>
          <p>We'll be hosting our annual Founder Summit on June 15-17 in San Francisco. This event brings together founders from our portfolio for networking and knowledge sharing.</p>
          <p>Thank you for your continued partnership.</p>
          <p>Best regards,</p>
          <p>The Sequoia Capital Team</p>`,
          summary: "Updates on portfolio companies, market trends, and investment thesis for Q2 2023. Key highlights include a focus on AI investments, fintech consolidation trends, and portfolio company TechCorp's successful Series C round.",
          sentiment: "Positive",
          keyTopics: ["Artificial Intelligence", "Fintech", "Healthcare Tech", "Climate Tech", "Investment Strategy"],
          mentionedCompanies: [
            { 
              name: "TechCorp", 
              description: "AI-powered analytics platform for enterprise",
              fundingStage: "Series C"
            },
            {
              name: "HealthAI",
              description: "Patient monitoring system with global presence",
              fundingStage: "Growth"
            }
          ],
          attachments: [
            {
              name: "Q2_Investment_Outlook.pdf",
              type: "PDF",
              size: "2.4 MB",
              url: "#"
            },
            {
              name: "Market_Research_Data.xlsx",
              type: "Excel",
              size: "1.8 MB",
              url: "#"
            }
          ]
        };
        
        setNewsletter(mockNewsletter);
      } catch (error) {
        console.error("Error fetching newsletter:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNewsletter();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return <span className="flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-green-100 text-green-700">
          <ThumbsUp className="w-3 h-3" /> Positive
        </span>;
      case "negative":
        return <span className="flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-red-100 text-red-700">
          <ThumbsDown className="w-3 h-3" /> Negative
        </span>;
      default:
        return <span className="px-2 py-1 rounded-full text-sm bg-gray-100 text-gray-700">Neutral</span>;
    }
  };
  
  if (loading) {
    return (
      <AuthLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-venture-purple">Loading newsletter...</div>
        </div>
      </AuthLayout>
    );
  }
  
  if (!newsletter) {
    return (
      <AuthLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Newsletter not found</h2>
          <p className="text-muted-foreground mt-2">The newsletter you're looking for doesn't exist or was removed.</p>
          <Button onClick={() => navigate('/newsletters')} className="mt-6">
            Back to Newsletters
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <Link 
            to="/newsletters"
            className="inline-flex items-center text-venture-purple hover:text-venture-purple-dark mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Newsletters
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-3xl font-bold">{newsletter.subject}</h1>
            
            <div className="flex items-center gap-2">
              {getSentimentBadge(newsletter.sentiment)}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-500">
              <Building className="h-4 w-4" />
              <span>{newsletter.vcName}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(newsletter.receivedDate)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Mail className="h-4 w-4" />
              <span>Newsletter #{newsletter.id}</span>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="content" className="w-full">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
            <TabsTrigger value="companies">Mentioned Companies</TabsTrigger>
            <TabsTrigger value="attachments">Attachments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="pt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsletter.content }} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analysis" className="pt-4">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Summary</h3>
                  <p className="text-gray-700">{newsletter.summary}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Key Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {newsletter.keyTopics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full">
                        <Tag className="h-3.5 w-3.5 text-venture-purple" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Sentiment Analysis</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-full max-w-md bg-gray-200 rounded-full h-4">
                      <div 
                        className="h-4 rounded-full bg-green-500" 
                        style={{ width: newsletter.sentiment === "Positive" ? "70%" : "30%" }}
                      ></div>
                    </div>
                    <span className="font-medium">{newsletter.sentiment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="companies" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsletter.mentionedCompanies.map((company, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-lg">{company.name}</h3>
                      {company.fundingStage && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {company.fundingStage}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{company.description}</p>
                    <Button variant="link" className="mt-2 p-0 h-auto text-venture-purple">
                      View company details <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="attachments" className="pt-4">
            <Card>
              <CardContent className="p-6">
                {newsletter.attachments && newsletter.attachments.length > 0 ? (
                  <ul className="divide-y">
                    {newsletter.attachments.map((attachment, index) => (
                      <li key={index} className="py-4 first:pt-0 last:pb-0">
                        <a 
                          href={attachment.url} 
                          className="flex items-center justify-between hover:bg-gray-50 rounded-md p-2 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded bg-venture-purple-light bg-opacity-20 flex items-center justify-center text-venture-purple">
                              {attachment.type}
                            </div>
                            <div>
                              <div className="font-medium">{attachment.name}</div>
                              <div className="text-sm text-gray-500">{attachment.size}</div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Download</Button>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No attachments for this newsletter
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default NewsletterDetail;
