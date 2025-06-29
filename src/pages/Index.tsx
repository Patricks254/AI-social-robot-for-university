
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, Cog, Calendar, FileText, Info } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-green-400 mr-3" />
              <span className="text-xl font-bold text-white">AI-Social Robot</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">Home</Link>
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

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Social Robot for
              <span className="text-green-400 block">University Assistance</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Our AI-Social Robot is designed to provide personalized assistance to students and visitors by recognizing their faces, offering directions, and helping them feel confident while navigating campus. It combines advanced facial recognition with voice interaction to provide a seamless experience, making campus life easier for newcomers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                <Link to="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Robot Icon */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
          <Bot className="h-64 w-64 text-green-400" />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Our AI-Social Robot addresses the challenges new students and visitors face when navigating unfamiliar campus environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bot className="h-6 w-6 text-green-400 mr-2" />
                Facial Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Advanced OpenCV and Dlib libraries for facial recognition, ensuring efficient and local processing.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Cog className="h-6 w-6 text-green-400 mr-2" />
                Voice Interaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Natural language processing with GPT API integration for intuitive voice-based communication and directions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="h-6 w-6 text-green-400 mr-2" />
                User-Friendly Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                LCD display, LED indicators, and intuitive interface designed specifically for campus navigation assistance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Explore Our Project</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Button asChild variant="ghost" className="h-24 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700">
            <Link to="/about" className="flex flex-col items-center text-white">
              <Info className="h-8 w-8 text-green-400 mb-2" />
              <span>About Project</span>
            </Link>
          </Button>
          
          <Button asChild variant="ghost" className="h-24 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700">
            <Link to="/team" className="flex flex-col items-center text-white">
              <Users className="h-8 w-8 text-green-400 mb-2" />
              <span>Team Members</span>
            </Link>
          </Button>
          
          <Button asChild variant="ghost" className="h-24 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700">
            <Link to="/technology" className="flex flex-col items-center text-white">
              <Cog className="h-8 w-8 text-green-400 mb-2" />
              <span>Technology</span>
            </Link>
          </Button>
          
          <Button asChild variant="ghost" className="h-24 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700">
            <Link to="/design" className="flex flex-col items-center text-white">
              <Bot className="h-8 w-8 text-green-400 mb-2" />
              <span>System Design</span>
            </Link>
          </Button>
          
          <Button asChild variant="ghost" className="h-24 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700">
            <Link to="/timeline" className="flex flex-col items-center text-white">
              <Calendar className="h-8 w-8 text-green-400 mb-2" />
              <span>Timeline</span>
            </Link>
          </Button>
          
          <Button asChild variant="ghost" className="h-24 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700">
            <Link to="/reports" className="flex flex-col items-center text-white">
              <FileText className="h-8 w-8 text-green-400 mb-2" />
              <span>Reports</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-400">
              ECEN 403 - Senior Design I | Texas A&M University | Summer 2025
            </p>
            <p className="text-slate-500 mt-2">
              Mentor: Dr. Jim Ji
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
