
import { Link } from "react-router-dom";
import { Bot } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bot className="h-8 w-8 text-green-400 mr-3" />
              <span className="text-xl font-bold text-white">AI-Social Robot</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-green-300 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-green-300 transition-colors">About</Link>
            <Link to="/team" className="text-white hover:text-green-300 transition-colors">Team</Link>
            <Link to="/technology" className="text-white hover:text-green-300 transition-colors">Technology</Link>
            <Link to="/design" className="text-white hover:text-green-300 transition-colors">Design</Link>
            <Link to="/timeline" className="text-white hover:text-green-300 transition-colors">Timeline</Link>
            <Link to="/reports" className="text-white hover:text-green-300 transition-colors">Reports</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
