
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Wrench, Zap, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Design = () => {
  const constraints = [
    {
      title: "Budget Limit ($1260)",
      description: "Use low-cost hardware like Arduino, open-source software",
      type: "financial"
    },
    {
      title: "Component Delays",
      description: "Order early and have backup suppliers ready",
      type: "logistical"
    },
    {
      title: "IEEE 1621 Standards",
      description: "Focuses on user interface indicators (UI)",
      type: "technical"
    },
    {
      title: "USB Communication",
      description: "Reliable connection between Arduino and laptop",
      type: "technical"
    }
  ];

  const risks = [
    {
      title: "Crowded Desks",
      description: "Can create background noise so we plan to use directional mics, and if needed, switch to screen-based input.",
      severity: "medium"
    },
    {
      title: "Response Lag",
      description: "If internet connection is weak we will perform local processing to avoid delays.",
      severity: "medium"
    },
    {
      title: "Lighting Issues",
      description: "Lighting can affect facial recognition so we will use low-light or IR (infrared) cameras and software-based brightness control to adjust different environments.",
      severity: "high"
    }
  ];

  const performanceCriteria = [
    {
      metric: "Cost-efficiency",
      description: "Evaluates affordability for educational institutions in terms of both development and deployment."
    },
    {
      metric: "Facial Recognition Accuracy",
      description: "Assesses the robot's ability to detect and recognize user faces reliably under varied lighting and angles."
    },
    {
      metric: "Voice Interaction Quality",
      description: "Measures the clarity and accuracy of verbal communication between the robot and the user."
    },
    {
      metric: "Customizability",
      description: "Degree to which the hardware and software can be modified for different educational applications."
    },
    {
      metric: "Ease of Development",
      description: "Technical knowledge required by students or faculty to set up, modify, or expand the robot."
    },
    {
      metric: "Safety & Data Privacy",
      description: "Evaluates physical safety of the robot and ethical handling of personal data."
    },
    {
      metric: "Cultural & Social Accessibility",
      description: "Ability to adapt to diverse university populations, languages, and user needs."
    },
    {
      metric: "Environmental Impact",
      description: "Analyzes power consumption and use of sustainable or recyclable materials in the build."
    },
    {
      metric: "Public Health & Welfare Impact",
      description: "Measures usefulness in educational support, student engagement, and potentially therapeutic benefits like comfort for students with social anxiety through stationary design and low-voltage components."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Design & Architecture
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technical constraints, risk analysis, and performance criteria for our AI-Social Robot
          </p>
        </div>

        {/* Circuit Design Overview */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Cpu className="h-8 w-8 text-green-400 mr-3" />
              Circuit Design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-green-300 font-semibold text-lg mb-4">Control System</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong>Arduino Mega</strong> controls all components</li>
                  <li>• <strong>Connected to:</strong> Camera module for face detection</li>
                  <li>• <strong>Audio System:</strong> MP3 module and speaker for voice output</li>
                  <li>• <strong>Visual Feedback:</strong> LED eyes for visual feedback</li>
                  <li>• <strong>Display:</strong> LCD screen for visual messages</li>
                </ul>
              </div>
              <div>
                <h3 className="text-green-300 font-semibold text-lg mb-4">Safety & Power</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong>Regulated Voltage:</strong> Powered safely with regulated voltage</li>
                  <li>• <strong>Individual Testing:</strong> Designed to allow testing each part individually</li>
                  <li>• <strong>Modular Design:</strong> Easy component replacement and maintenance</li>
                  <li>• <strong>Safety First:</strong> Low-voltage components for user safety</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Standards & Constraints */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Wrench className="h-8 w-8 text-blue-400 mr-3" />
              Technical Standards & Constraints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {constraints.map((constraint, index) => (
                <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="flex items-start mb-2">
                    <Badge 
                      variant="outline" 
                      className={`mr-2 text-xs ${
                        constraint.type === 'financial' ? 'border-green-500/30 text-green-300' :
                        constraint.type === 'technical' ? 'border-blue-500/30 text-blue-300' :
                        'border-orange-500/30 text-orange-300'
                      }`}
                    >
                      {constraint.type}
                    </Badge>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{constraint.title}</h3>
                  <p className="text-slate-300 text-sm">{constraint.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Analysis */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
              Risk Analysis & Mitigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {risks.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold">{risk.title}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        risk.severity === 'high' ? 'border-red-500/30 text-red-300' :
                        risk.severity === 'medium' ? 'border-yellow-500/30 text-yellow-300' :
                        'border-green-500/30 text-green-300'
                      }`}
                    >
                      {risk.severity} risk
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm">{risk.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Criteria */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
              Performance Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 text-green-300 font-semibold">Metric</th>
                    <th className="text-left py-3 px-4 text-green-300 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceCriteria.map((criteria, index) => (
                    <tr key={index} className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white font-medium">{criteria.metric}</td>
                      <td className="py-3 px-4 text-slate-300 text-sm">{criteria.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Design;
