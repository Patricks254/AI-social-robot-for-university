
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const Timeline = () => {
  const currentSemesterTasks = [
    { week: "1", task: "Project Kickoff & Role Assignment", status: "completed" },
    { week: "2", task: "Literature Review", status: "completed" },
    { week: "3", task: "Define Functional & System Requirements", status: "completed" },
    { week: "4", task: "Concept of Operation (ConOps)", status: "completed" },
    { week: "5-6", task: "Software: Facial Recognition Module", status: "in-progress" },
    { week: "7-8", task: "Integration & Logic Testing", status: "upcoming" },
    { week: "9", task: "Prepare Bill of Materials (BoM)", status: "upcoming" },
    { week: "10", task: "Simulation: LED, Audio Logic & Motion Flow", status: "upcoming" },
    { week: "11", task: "System Integration Plan", status: "upcoming" },
    { week: "12-13", task: "Progress Report & Presentation", status: "upcoming" }
  ];

  const nextSemesterTasks = [
    { week: "1", task: "Component Inventory Check", status: "planned" },
    { week: "2-3", task: "Hardware Assembly (Wiring + Mounting)", status: "planned" },
    { week: "4-5", task: "Full Hardware-Software Integration", status: "planned" },
    { week: "6", task: "Add MP3 Playback Module & Audio Amplifier", status: "planned" },
    { week: "7", task: "Motor Behavior Implementation (Servo)", status: "planned" },
    { week: "8-9", task: "System Calibration & Error Handling", status: "planned" },
    { week: "10", task: "Real-World Testing & Refinement", status: "planned" },
    { week: "11", task: "Final Demo Preparation", status: "planned" }
  ];

  const progressAchievements = [
    "Defined our roles and how we work as a team",
    "Studied other robots and planned out what we want ours to do",
    "Built the face detection part using OpenCV",
    "Simulated the robot talking using Python",
    "Ordered all the parts we need and planned how everything will connect"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "in-progress":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "upcoming":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "planned":
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "in-progress":
        return <Clock className="h-4 w-4" />;
      case "upcoming":
        return <ArrowRight className="h-4 w-4" />;
      case "planned":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Timeline
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our development schedule and progress milestones
          </p>
        </div>

        {/* Progress Made */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
              Progress Made
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-green-300 font-semibold text-lg mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {progressAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-slate-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-green-300 font-semibold text-lg mb-3">Foundation Status</h3>
                <p className="text-slate-300">
                  This gives us a strong foundation for next semester. We have completed the initial 
                  research, planning, and prototype development phases, setting us up for successful 
                  hardware integration and testing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Semester Timeline */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Calendar className="h-8 w-8 text-blue-400 mr-3" />
              Current Semester Timeline
            </CardTitle>
            <CardDescription className="text-slate-300">
              Summer 2025 - ECEN 403 Senior Design I
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 text-blue-300 font-semibold">Weeks</th>
                    <th className="text-left py-3 px-4 text-blue-300 font-semibold">Tasks</th>
                    <th className="text-left py-3 px-4 text-blue-300 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSemesterTasks.map((task, index) => (
                    <tr key={index} className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white font-medium">{task.week}</td>
                      <td className="py-3 px-4 text-slate-300">{task.task}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={`text-xs ${getStatusColor(task.status)}`}>
                          <span className="flex items-center">
                            {getStatusIcon(task.status)}
                            <span className="ml-1 capitalize">{task.status.replace('-', ' ')}</span>
                          </span>
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Next Semester Timeline */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Calendar className="h-8 w-8 text-purple-400 mr-3" />
              Next Semester Timeline
            </CardTitle>
            <CardDescription className="text-slate-300">
              Fall 2025 - ECEN 404 Senior Design II
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 text-purple-300 font-semibold">Weeks</th>
                    <th className="text-left py-3 px-4 text-purple-300 font-semibold">Tasks</th>
                    <th className="text-left py-3 px-4 text-purple-300 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {nextSemesterTasks.map((task, index) => (
                    <tr key={index} className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white font-medium">{task.week}</td>
                      <td className="py-3 px-4 text-slate-300">{task.task}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={`text-xs ${getStatusColor(task.status)}`}>
                          <span className="flex items-center">
                            {getStatusIcon(task.status)}
                            <span className="ml-1 capitalize">{task.status}</span>
                          </span>
                        </Badge>
                      </td>
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

export default Timeline;
