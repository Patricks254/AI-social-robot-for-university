
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Users, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Reports = () => {
  const documents = [
    {
      title: "Project Proposal",
      description: "Initial project proposal and problem statement",
      date: "June 2025",
      type: "proposal",
      status: "final"
    },
    {
      title: "Literature Review",
      description: "Research on existing social robots and campus assistance systems",
      date: "June 2025",
      type: "research",
      status: "final"
    },
    {
      title: "System Requirements Document",
      description: "Functional and non-functional requirements specification",
      date: "June 2025",
      type: "requirements",
      status: "final"
    },
    {
      title: "Concept of Operations (ConOps)",
      description: "Detailed operational concept and user interaction scenarios",
      date: "July 2025",
      type: "design",
      status: "final"
    },
    {
      title: "Bill of Materials (BoM)",
      description: "Complete list of hardware components and costs",
      date: "July 2025",
      type: "technical",
      status: "draft"
    },
    {
      title: "Circuit Design Specifications",
      description: "Detailed circuit diagrams and electrical specifications",
      date: "July 2025",
      type: "technical",
      status: "in-progress"
    },
    {
      title: "Software Architecture Document",
      description: "Python and Arduino code structure and integration plan",
      date: "July 2025",
      type: "technical",
      status: "in-progress"
    },
    {
      title: "Progress Report - Midterm",
      description: "Current progress, challenges, and next steps",
      date: "July 2025",
      type: "progress",
      status: "upcoming"
    }
  ];

  const meetingMinutes = [
    {
      date: "June 5, 2025",
      topic: "Project Kickoff & Role Assignment",
      attendees: ["Noor Almohammadi", "Maryam Al-Obaidan", "Amna Al-Zeyara"],
      status: "final"
    },
    {
      date: "June 12, 2025",
      topic: "Literature Review Discussion",
      attendees: ["All team members"],
      status: "final"
    },
    {
      date: "June 19, 2025",
      topic: "Requirements Definition Session",
      attendees: ["All team members"],
      status: "final"
    },
    {
      date: "June 26, 2025",
      topic: "Technical Architecture Planning",
      attendees: ["All team members"],
      status: "final"
    },
    {
      date: "July 3, 2025",
      topic: "Component Selection & Ordering",
      attendees: ["All team members"],
      status: "draft"
    },
    {
      date: "July 10, 2025",
      topic: "Software Development Progress",
      attendees: ["All team members"],
      status: "upcoming"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "proposal":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "research":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "requirements":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "design":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "technical":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      case "progress":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "final":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "draft":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "in-progress":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "upcoming":
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reports & Documentation
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access project documents, reports, and meeting minutes
          </p>
        </div>

        {/* Note about document access */}
        <Card className="bg-orange-900/20 border-orange-500/30 mb-8">
          <CardHeader>
            <CardTitle className="text-orange-300 text-lg flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Document Access Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-200">
              All project documents are stored in our team's shared repository. 
              For access to specific documents, please contact our team members directly. 
              Final versions will be made available as they are completed.
            </p>
          </CardContent>
        </Card>

        {/* Project Documents */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <FileText className="h-8 w-8 text-green-400 mr-3" />
              Project Documents
            </CardTitle>
            <CardDescription className="text-slate-300">
              Technical reports, specifications, and project deliverables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{doc.title}</h3>
                      <p className="text-slate-300 text-sm mb-2">{doc.description}</p>
                      <p className="text-slate-400 text-xs">{doc.date}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Badge variant="outline" className={`text-xs ${getTypeColor(doc.type)}`}>
                        {doc.type}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      disabled={doc.status === 'upcoming'}
                      className="text-xs"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      {doc.status === 'upcoming' ? 'Pending' : 'Download'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meeting Minutes */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Calendar className="h-8 w-8 text-blue-400 mr-3" />
              Meeting Minutes
            </CardTitle>
            <CardDescription className="text-slate-300">
              Team meeting records and discussion summaries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {meetingMinutes.map((meeting, index) => (
                <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{meeting.topic}</h3>
                      <div className="flex items-center text-slate-400 text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {meeting.date}
                        <Users className="h-4 w-4 ml-4 mr-1" />
                        {meeting.attendees.join(", ")}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-xs ${getStatusColor(meeting.status)}`}>
                        {meeting.status}
                      </Badge>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        disabled={meeting.status === 'upcoming'}
                        className="text-xs"
                      >
                        <Download className="h-3 w-3 mr-1" />
                        {meeting.status === 'upcoming' ? 'Pending' : 'View'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
