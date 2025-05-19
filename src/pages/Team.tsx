
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Plus,
  Mail,
  MoreHorizontal,
  User,
  Shield,
  Clock
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Mock team members data
const mockTeamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    joinedAt: "2023-01-15T10:00:00Z"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Active",
    joinedAt: "2023-02-20T14:30:00Z"
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "Viewer",
    status: "Pending",
    joinedAt: "2023-05-10T09:15:00Z"
  }
];

const Team = () => {
  const [teamMembers, setTeamMembers] = useState(mockTeamMembers);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Viewer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add new member to the list
      const newMember = {
        id: teamMembers.length + 1,
        name: "",
        email: inviteEmail,
        role: inviteRole,
        status: "Pending",
        joinedAt: new Date().toISOString()
      };
      
      setTeamMembers([...teamMembers, newMember]);
      
      toast({
        title: "Invitation Sent",
        description: `An invitation has been sent to ${inviteEmail}`,
      });
      
      // Reset form and close dialog
      setInviteEmail("");
      setInviteRole("Viewer");
      setIsInviteDialogOpen(false);
    } catch (error) {
      toast({
        title: "Failed to send invitation",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleRoleChange = (memberId: number, newRole: string) => {
    setTeamMembers(members => members.map(member => 
      member.id === memberId ? { ...member, role: newRole } : member
    ));
    
    toast({
      title: "Role Updated",
      description: `Team member's role has been changed to ${newRole}`,
    });
  };
  
  const handleRemoveMember = (memberId: number) => {
    if (window.confirm("Are you sure you want to remove this team member?")) {
      setTeamMembers(members => members.filter(member => member.id !== memberId));
      
      toast({
        title: "Team Member Removed",
        description: "The team member has been removed from your account",
      });
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
  
  const roleColors: Record<string, string> = {
    "Admin": "bg-purple-100 text-venture-purple-dark",
    "Editor": "bg-blue-100 text-blue-700",
    "Viewer": "bg-gray-100 text-gray-700"
  };
  
  const getRoleBadge = (role: string) => {
    const colorClass = roleColors[role] || "bg-gray-100 text-gray-700";
    return <span className={`px-2 py-1 rounded-full text-xs ${colorClass}`}>{role}</span>;
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">Active</span>;
      case "Pending":
        return <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">Pending</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Team</h1>
            <p className="text-muted-foreground">
              Manage your team members and their access permissions
            </p>
          </div>
          
          <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-venture-purple hover:bg-venture-purple-dark">
                <Plus className="mr-2 h-4 w-4" /> Invite Team Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <form onSubmit={handleInvite}>
                <DialogHeader>
                  <DialogTitle>Invite Team Member</DialogTitle>
                  <DialogDescription>
                    Send an invitation to collaborate on your VentureRadar account.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="colleague@example.com"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="role" className="text-sm font-medium">
                      Role
                    </label>
                    <select
                      id="role"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-venture-purple focus:border-venture-purple"
                      value={inviteRole}
                      onChange={(e) => setInviteRole(e.target.value)}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                    
                    <div className="text-sm text-gray-500 mt-2">
                      <p className="mb-1"><strong>Admin:</strong> Full access to all features</p>
                      <p className="mb-1"><strong>Editor:</strong> Can edit VCs and view newsletters</p>
                      <p><strong>Viewer:</strong> Can only view data, no editing</p>
                    </div>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsInviteDialogOpen(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-venture-purple hover:bg-venture-purple-dark" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Invitation"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Manage access and permissions for your team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">{member.name || "Invited User"}</div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-3 w-3 mr-1" />
                            <span>{member.email}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(member.role)}</TableCell>
                    <TableCell>{getStatusBadge(member.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{formatDate(member.joinedAt)}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(member.id, "Admin")}
                            disabled={member.role === "Admin"}
                          >
                            <Shield className="h-4 w-4 mr-2" /> 
                            Make Admin
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(member.id, "Editor")}
                            disabled={member.role === "Editor"}
                          >
                            <Shield className="h-4 w-4 mr-2" /> 
                            Make Editor
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(member.id, "Viewer")}
                            disabled={member.role === "Viewer"}
                          >
                            <Shield className="h-4 w-4 mr-2" /> 
                            Make Viewer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleRemoveMember(member.id)}
                          >
                            Remove Access
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                
                {teamMembers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-32">
                      <div className="flex flex-col items-center justify-center">
                        <User className="h-8 w-8 text-gray-300 mb-2" />
                        <h3 className="font-medium">No Team Members</h3>
                        <p className="text-sm text-gray-500">
                          Invite team members to collaborate with you
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm bg-gray-50">
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>
              Understanding access levels for each role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {getRoleBadge("Admin")}
                </div>
                <h3 className="font-medium mb-2">Admin</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Full access to all features</li>
                  <li>• Invite and manage team members</li>
                  <li>• Manage billing and subscription</li>
                  <li>• Configure crawler settings</li>
                  <li>• Add/edit/delete VC firms</li>
                  <li>• Access all analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {getRoleBadge("Editor")}
                </div>
                <h3 className="font-medium mb-2">Editor</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• View all data and content</li>
                  <li>• Add/edit VC firms</li>
                  <li>• Process newsletters</li>
                  <li>• Create digests</li>
                  <li>• View analytics</li>
                  <li>• Cannot manage team or billing</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {getRoleBadge("Viewer")}
                </div>
                <h3 className="font-medium mb-2">Viewer</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• View-only access to all data</li>
                  <li>• Can see VC firms</li>
                  <li>• Can read newsletters</li>
                  <li>• Can view digests</li>
                  <li>• Limited analytics access</li>
                  <li>• No editing capabilities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default Team;
