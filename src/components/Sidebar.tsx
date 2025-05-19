
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  List, 
  Send, 
  Settings, 
  LogOut, 
  Users, 
  CreditCard 
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || '{"name":"User","email":"user@example.com"}');

  const menuItems = [
    { 
      name: "Dashboard", 
      path: "/dashboard", 
      icon: Home 
    },
    { 
      name: "VC Directory", 
      path: "/vcs", 
      icon: List 
    },
    { 
      name: "Newsletters", 
      path: "/newsletters", 
      icon: Send 
    },
    { 
      name: "Team", 
      path: "/team", 
      icon: Users 
    },
    { 
      name: "Subscription", 
      path: "/subscription", 
      icon: CreditCard 
    },
    { 
      name: "Settings", 
      path: "/settings", 
      icon: Settings 
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col h-full w-64 bg-venture-dark text-white border-r border-gray-800">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold gradient-text">VentureRadar</span>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-gray-800">
        <div className="text-sm text-gray-300">Logged in as</div>
        <div className="font-medium">{user.name}</div>
        <div className="text-sm text-gray-400">{user.email}</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                    isActive
                      ? "bg-venture-purple-dark text-white"
                      : "text-gray-300 hover:bg-venture-dark hover:text-white"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-300 hover:bg-venture-purple-dark hover:text-white rounded-md transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
