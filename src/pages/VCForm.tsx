
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VCForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    description: "",
    focusAreas: "",
    investmentStages: "",
    location: "",
    foundedYear: "",
    portfolioSize: "",
    fundSize: "",
    notableInvestments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "VC Added Successfully",
        description: "The VC firm has been added to your tracking list",
      });
      
      navigate("/vcs");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add VC firm",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Back button */}
        <div>
          <Link to="/vcs">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to VC Directory
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold">Add New VC</h1>
        <p className="text-muted-foreground">
          Fill in the details below to add a new venture capital firm to your tracking list.
        </p>

        <Card className="shadow-sm">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>VC Information</CardTitle>
              <CardDescription>
                Enter basic information about the venture capital firm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Firm Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sequoia Capital"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL *</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="e.g. https://www.sequoiacap.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of the VC firm"
                  rows={4}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="focusAreas">Focus Areas</Label>
                  <Input
                    id="focusAreas"
                    name="focusAreas"
                    value={formData.focusAreas}
                    onChange={handleChange}
                    placeholder="e.g. Fintech, AI, Healthcare (comma separated)"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="investmentStages">Investment Stages</Label>
                  <Input
                    id="investmentStages"
                    name="investmentStages"
                    value={formData.investmentStages}
                    onChange={handleChange}
                    placeholder="e.g. Seed, Series A, Growth (comma separated)"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Menlo Park, CA"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="foundedYear">Founded Year</Label>
                  <Input
                    id="foundedYear"
                    name="foundedYear"
                    type="number"
                    value={formData.foundedYear}
                    onChange={handleChange}
                    placeholder="e.g. 1972"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="portfolioSize">Portfolio Size</Label>
                  <Input
                    id="portfolioSize"
                    name="portfolioSize"
                    value={formData.portfolioSize}
                    onChange={handleChange}
                    placeholder="e.g. 300+"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fundSize">Fund Size</Label>
                  <Input
                    id="fundSize"
                    name="fundSize"
                    value={formData.fundSize}
                    onChange={handleChange}
                    placeholder="e.g. $1B+"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notableInvestments">Notable Investments</Label>
                <Input
                  id="notableInvestments"
                  name="notableInvestments"
                  value={formData.notableInvestments}
                  onChange={handleChange}
                  placeholder="e.g. Company A, Company B, Company C (comma separated)"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => navigate("/vcs")}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-venture-purple hover:bg-venture-purple-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add VC Firm"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default VCForm;
