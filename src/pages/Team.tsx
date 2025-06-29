
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, BookOpen, Wrench, Code, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";

const Team = () => {
  const teamMembers = [
    {
      name: "Noor Almohammadi",
      role: "Hardware Lead",
      description: "Responsible for Arduino development, circuit design, and hardware integration",
      skills: ["Arduino Programming", "Circuit Design", "Hardware Integration", "Electronics"],
      icon: <Wrench className="h-6 w-6" />
    },
    {
      name: "Maryam Al-Obaidan",
      role: "Team Leader & Arduino Developer",
      description: "Project coordination, Arduino programming, and system integration oversight",
      skills: ["Project Management", "Arduino", "System Integration", "Leadership"],
      icon: <User className="h-6 w-6" />
    },
    {
      name: "Amna Al-Zeyara",
      role: "Software Developer - Python",
      description: "Python development, facial recognition implementation, and AI integration",
      skills: ["Python", "OpenCV", "Machine Learning", "AI Development"],
      icon: <Code className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Team 2 Members - Summer 2025 | ECEN 403 Senior Design I
          </p>
        </div>

        {/* Course Info */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <BookOpen className="h-8 w-8 text-green-400 mr-3" />
              Course Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-green-300 font-semibold text-lg mb-2">Course</h3>
                <p className="text-slate-300">ECEN 403 - Senior Design I</p>
              </div>
              <div>
                <h3 className="text-green-300 font-semibold text-lg mb-2">Mentor</h3>
                <p className="text-slate-300">Dr. Jim Ji</p>
              </div>
              <div>
                <h3 className="text-green-300 font-semibold text-lg mb-2">Semester</h3>
                <p className="text-slate-300">Summer 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    {member.icon}
                  </div>
                </div>
                <CardTitle className="text-white text-xl text-center">{member.name}</CardTitle>
                <CardDescription className="text-center">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    {member.role}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4 text-center">{member.description}</p>
                <div className="space-y-2">
                  <h4 className="text-green-300 font-semibold text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Collaboration */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Cpu className="h-8 w-8 text-blue-400 mr-3" />
              Team Collaboration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-blue-300 font-semibold text-lg mb-3">Our Approach</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Defined clear roles and responsibilities for each team member</li>
                  <li>• Regular team meetings to track progress and coordinate tasks</li>
                  <li>• Collaborative development with Arduino and Python integration</li>
                  <li>• Continuous testing and iteration of robot functionality</li>
                </ul>
              </div>
              <div>
                <h3 className="text-blue-300 font-semibold text-lg mb-3">Progress Achievements</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Studied other robots and planned our unique approach</li>
                  <li>• Built the face detection system using OpenCV</li>
                  <li>• Simulated robot talking functionality with Python</li>
                  <li>• Ordered components and planned system integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;
