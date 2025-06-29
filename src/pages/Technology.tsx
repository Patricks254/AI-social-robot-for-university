
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Camera, Speaker, Monitor, Zap, Mic, Eye, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";

const Technology = () => {
  const systemComponents = [
    {
      name: "Arduino Mega",
      description: "Main control system connected to laptop via USB",
      icon: <Cpu className="h-6 w-6" />,
      category: "Hardware"
    },
    {
      name: "Camera Module",
      description: "For facial recognition and user detection",
      icon: <Camera className="h-6 w-6" />,
      category: "Hardware"
    },
    {
      name: "MP3 & Speaker Module",
      description: "For voice responses and audio output",
      icon: <Speaker className="h-6 w-6" />,
      category: "Hardware"
    },
    {
      name: "LCD Screen",
      description: "For displaying directions and information",
      icon: <Monitor className="h-6 w-6" />,
      category: "Hardware"
    },
    {
      name: "LED Eyes",
      description: "For visual signals and status indicators",
      icon: <Eye className="h-6 w-6" />,
      category: "Hardware"
    },
    {
      name: "Microphone",
      description: "For voice input and user interaction",
      icon: <Mic className="h-6 w-6" />,
      category: "Hardware"
    },
    {
      name: "Python (OpenCV)",
      description: "For facial recognition and image processing",
      icon: <Eye className="h-6 w-6" />,
      category: "Software"
    },
    {
      name: "Python GUI",
      description: "Graphical user interface for interaction and display output",
      icon: <MessageSquare className="h-6 w-6" />,
      category: "Software"
    }
  ];

  const hardwareComponents = systemComponents.filter(comp => comp.category === "Hardware");
  const softwareComponents = systemComponents.filter(comp => comp.category === "Software");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology & Components
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Detailed overview of our robot's hardware and software components
          </p>
        </div>

        {/* Robot Interaction Flow */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <MessageSquare className="h-8 w-8 text-green-400 mr-3" />
              Robot Interaction Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                <Camera className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-blue-300 font-semibold mb-1">User Detected</h3>
                <p className="text-slate-300 text-sm">Camera detects approaching user</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                <Eye className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-green-300 font-semibold mb-1">Robot Greets & Speaks</h3>
                <p className="text-slate-300 text-sm">Welcomes user and asks for name</p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                <Mic className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-purple-300 font-semibold mb-1">User Responds</h3>
                <p className="text-slate-300 text-sm">Provides name, major, and destination</p>
              </div>
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 text-center">
                <Monitor className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <h3 className="text-orange-300 font-semibold mb-1">Robot Gives Directions</h3>
                <p className="text-slate-300 text-sm">Provides spoken and visual directions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hardware Components */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Cpu className="h-8 w-8 text-blue-400 mr-3" />
              Hardware Components
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareComponents.map((component, index) => (
                <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                      {component.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{component.name}</h3>
                      <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-300">
                        {component.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{component.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Software Components */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <MessageSquare className="h-8 w-8 text-green-400 mr-3" />
              Software Components
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareComponents.map((component, index) => (
                <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500/20 p-2 rounded-lg mr-3">
                      {component.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{component.name}</h3>
                      <Badge variant="outline" className="text-xs border-green-500/30 text-green-300">
                        {component.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{component.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Zap className="h-8 w-8 text-yellow-400 mr-3" />
              Technical Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-yellow-300 font-semibold text-lg mb-4">Power & Connectivity</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong>Power:</strong> Regulated voltage supply</li>
                  <li>• <strong>Connectivity:</strong> USB connection to laptop</li>
                  <li>• <strong>Processing:</strong> Python backend with Arduino control</li>
                  <li>• <strong>Safety:</strong> Individual component testing capability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold text-lg mb-4">Features & Capabilities</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong>Recognition:</strong> OpenCV facial detection</li>
                  <li>• <strong>Audio:</strong> MP3 playback and microphone input</li>
                  <li>• <strong>Display:</strong> LCD screen for visual feedback</li>
                  <li>• <strong>Indicators:</strong> LED eyes for visual signals</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Technology;
