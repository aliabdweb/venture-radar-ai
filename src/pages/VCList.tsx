
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import {
  ArrowRight,
  Plus,
  Search,
  RefreshCw,
  Filter,
  Upload,
  Download
} from "lucide-react";

// Mock data for VC firms
const mockVCs = [
  {
    id: 1,
    name: "Sequoia Capital",
    website: "sequoiacap.com",
    focus: ["Fintech", "AI", "Enterprise"],
    stage: ["Series A", "Series B", "Growth"],
    location: "Menlo Park, CA",
    status: "Subscribed"
  },
  {
    id: 2,
    name: "Andreessen Horowitz",
    website: "a16z.com",
    focus: ["Web3", "Consumer", "Enterprise"],
    stage: ["Seed", "Series A", "Series B"],
    location: "Menlo Park, CA",
    status: "Subscribed"
  },
  {
    id: 3,
    name: "Y Combinator",
    website: "ycombinator.com",
    focus: ["Consumer", "Enterprise", "Healthcare"],
    stage: ["Seed", "Pre-seed"],
    location: "Mountain View, CA",
    status: "Pending"
  },
  {
    id: 4,
    name: "Accel",
    website: "accel.com",
    focus: ["Enterprise", "SaaS", "Infrastructure"],
    stage: ["Series A", "Series B", "Growth"],
    location: "Palo Alto, CA",
    status: "Ready for Crawl"
  },
  {
    id: 5,
    name: "Benchmark",
    website: "benchmark.com",
    focus: ["Consumer", "Marketplace", "Social"],
    stage: ["Series A", "Series B"],
    location: "San Francisco, CA",
    status: "Subscribed"
  }
];

const VCList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVCs, setFilteredVCs] = useState(mockVCs);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term) {
      setFilteredVCs(mockVCs);
      return;
    }
    
    const filtered = mockVCs.filter(vc => 
      vc.name.toLowerCase().includes(term.toLowerCase()) ||
      vc.website.toLowerCase().includes(term.toLowerCase()) ||
      vc.focus.some(f => f.toLowerCase().includes(term.toLowerCase())) ||
      vc.stage.some(s => s.toLowerCase().includes(term.toLowerCase())) ||
      vc.location.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredVCs(filtered);
  };
  
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

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">VC Directory</h1>
            <p className="text-muted-foreground">
              Manage and track venture capital firms
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="sm" variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
            <Button size="sm" variant="outline" className="flex gap-2">
              <Upload className="h-4 w-4" />
              <span>Import</span>
            </Button>
            <Button size="sm" variant="outline" className="flex gap-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Link to="/vcs/new">
              <Button size="sm" className="bg-venture-purple hover:bg-venture-purple-dark">
                <Plus className="h-4 w-4 mr-2" /> Add VC
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Search and refresh */}
        <Card className="shadow-sm">
          <CardContent className="py-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search VC firms..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex gap-2">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* VC table */}
        <Card className="shadow-sm">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Focus Areas</TableHead>
                  <TableHead>Investment Stages</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVCs.length > 0 ? (
                  filteredVCs.map((vc) => (
                    <TableRow key={vc.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{vc.name}</div>
                          <div className="text-sm text-gray-500">{vc.website}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {vc.focus.map((item, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {vc.stage.map((item, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{vc.location}</TableCell>
                      <TableCell>{getStatusBadge(vc.status)}</TableCell>
                      <TableCell>
                        <Link to={`/vcs/${vc.id}`}>
                          <Button size="sm" variant="outline">
                            Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-muted-foreground">No VC firms found</p>
                        <Link to="/vcs/new">
                          <Button size="sm" className="bg-venture-purple hover:bg-venture-purple-dark mt-2">
                            <Plus className="h-4 w-4 mr-2" /> Add VC
                          </Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default VCList;
