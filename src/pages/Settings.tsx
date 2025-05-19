import { useState, useEffect } from "react";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("user");
  const { toast } = useToast();

  // User profile state
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Inc.",
    role: "Founder & CEO",
    bio: "Tech entrepreneur with 10+ years of experience in SaaS and fintech sectors."
  });

  // Newsletter preferences state
  const [preferences, setPreferences] = useState({
    emailFrequency: "daily",
    receiveDigests: true,
    includeSentiment: true,
    enableAlerts: false,
    preferredSectors: ["Fintech", "AI", "SaaS", "Healthcare"],
    preferredStages: ["Seed", "Series A"]
  });

  // API settings state
  const [apiSettings, setApiSettings] = useState({
    crawlerEmail: "crawler@ventureradar.io",
    automationFrequency: "daily",
    retryAttempts: "3",
    maxSubscriptions: "1000"
  });

  // Get user role from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (userData && userData.role) {
      setUserRole(userData.role);
      // Update profile with user data
      setProfile(prev => ({
        ...prev,
        name: userData.name || prev.name,
        email: userData.email || prev.email,
      }));
    }
  }, []);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleApiSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSavePreferences = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Preferences Updated",
        description: "Your newsletter preferences have been updated."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update preferences.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveApiSettings = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "API Settings Updated",
        description: "Your crawler settings have been updated."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update API settings.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>

        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="preferences">Newsletter Preferences</TabsTrigger>
            {userRole === "admin" && (
              <TabsTrigger value="api">Crawler Settings</TabsTrigger>
            )}
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>
                  Manage your personal information and account details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      disabled
                    />
                    <p className="text-xs text-muted-foreground">
                      Contact support to change your email address
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={profile.company}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      value={profile.role}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleProfileChange}
                    rows={4}
                  />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Account Security</h3>
                  <Button variant="outline">Change Password</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleSaveProfile} 
                  className="bg-venture-purple hover:bg-venture-purple-dark"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Newsletter Preferences Tab */}
          <TabsContent value="preferences">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Newsletter Preferences</CardTitle>
                <CardDescription>
                  Customize how you receive and view newsletter content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="emailFrequency">Email Frequency</Label>
                    <Select 
                      value={preferences.emailFrequency}
                      onValueChange={(value) => setPreferences(prev => ({ ...prev, emailFrequency: value }))}
                    >
                      <SelectTrigger id="emailFrequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="receiveDigests">Receive Digests</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive compiled digests of newsletter content
                      </p>
                    </div>
                    <Switch
                      id="receiveDigests"
                      checked={preferences.receiveDigests}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, receiveDigests: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="includeSentiment">Include Sentiment Analysis</Label>
                      <p className="text-sm text-muted-foreground">
                        Display AI sentiment analysis for newsletters
                      </p>
                    </div>
                    <Switch
                      id="includeSentiment"
                      checked={preferences.includeSentiment}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, includeSentiment: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enableAlerts">Important News Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive immediate alerts for high-impact news
                      </p>
                    </div>
                    <Switch
                      id="enableAlerts"
                      checked={preferences.enableAlerts}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, enableAlerts: checked }))}
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-4">Content Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Preferred Industry Sectors</Label>
                      <div className="flex flex-wrap gap-2">
                        {preferences.preferredSectors.map((sector) => (
                          <div key={sector} className="flex items-center bg-venture-purple bg-opacity-10 px-3 py-1 rounded-full">
                            <span className="text-sm text-venture-purple-dark">{sector}</span>
                            <button
                              className="ml-2 text-venture-purple-dark hover:text-venture-purple"
                              onClick={() => {
                                setPreferences(prev => ({
                                  ...prev,
                                  preferredSectors: prev.preferredSectors.filter(s => s !== sector)
                                }));
                              }}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">+ Add Sector</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Preferred Investment Stages</Label>
                      <div className="flex flex-wrap gap-2">
                        {preferences.preferredStages.map((stage) => (
                          <div key={stage} className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                            <span className="text-sm text-blue-700">{stage}</span>
                            <button
                              className="ml-2 text-blue-700 hover:text-blue-900"
                              onClick={() => {
                                setPreferences(prev => ({
                                  ...prev,
                                  preferredStages: prev.preferredStages.filter(s => s !== stage)
                                }));
                              }}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">+ Add Stage</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleSavePreferences} 
                  className="bg-venture-purple hover:bg-venture-purple-dark"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Preferences"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* API Settings Tab - Only for admin */}
          {userRole === "admin" && (
            <TabsContent value="api">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Crawler Settings</CardTitle>
                  <CardDescription>
                    Configure your newsletter crawler settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="crawlerEmail">Crawler Email Address</Label>
                      <Input
                        id="crawlerEmail"
                        name="crawlerEmail"
                        type="email"
                        value={apiSettings.crawlerEmail}
                        onChange={handleApiSettingsChange}
                      />
                      <p className="text-xs text-muted-foreground">
                        This email will be used to subscribe to VC newsletters
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="automationFrequency">Automation Frequency</Label>
                      <Select 
                        value={apiSettings.automationFrequency}
                        onValueChange={(value) => setApiSettings(prev => ({ ...prev, automationFrequency: value }))}
                      >
                        <SelectTrigger id="automationFrequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        How often the crawler will check for new newsletters
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="retryAttempts">Retry Attempts</Label>
                      <Input
                        id="retryAttempts"
                        name="retryAttempts"
                        type="number"
                        min="1"
                        max="10"
                        value={apiSettings.retryAttempts}
                        onChange={handleApiSettingsChange}
                      />
                      <p className="text-xs text-muted-foreground">
                        Number of times to retry failed subscription attempts
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="maxSubscriptions">Max Subscriptions</Label>
                      <Input
                        id="maxSubscriptions"
                        name="maxSubscriptions"
                        type="number"
                        min="100"
                        value={apiSettings.maxSubscriptions}
                        onChange={handleApiSettingsChange}
                      />
                      <p className="text-xs text-muted-foreground">
                        Maximum number of newsletters to subscribe to
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-4">Advanced Settings</h3>
                    
                    <div className="space-y-4">
                      <Button variant="outline">View API Credentials</Button>
                      <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700">
                        Reset Crawler State
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleSaveApiSettings} 
                    className="bg-venture-purple hover:bg-venture-purple-dark"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save API Settings"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default Settings;
