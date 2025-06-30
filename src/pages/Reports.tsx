import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Users, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Reports = () => {
  const documents = [
    {
      title: "FSR Assignment",
      description: "Functional System Requirements of the AI-Social Robot",
      date: "June 2025",
      type: "technical",
      status: "final",
      filePath: "/documents/ECEN403-FSRAssignment.pdf"
    },
    {
      title: "FSR Assignment 2",
      description: "System extension and modular upgrade definitions",
      date: "June 2025",
      type: "technical",
      status: "final",
      filePath: "/documents/ECEN403-FSRAssignment 2.pdf"
    },
    {
      title: "Benchmarking Report",
      description: "Comparison with market alternatives and evaluation metrics",
      date: "June 2025",
      type: "technical",
      status: "final",
      filePath: "/documents/Ecen403-Benchmarkingassignment2.pdf"
    },
    {
      title: "Milestones & Validation Plan",
      description: "Execution plan and milestone validation for Fall 2025",
      date: "June 2025",
      type: "technical",
      status: "final",
      filePath: "/documents/Ecen403-Milestones_and_Validation_Plan_Draft2.pdf"
    },
    {
      title: "Final Presentation Slides",
      description: "Campus bot presentation slides summarizing architecture, goals, and impact",
      date: "June 2025",
      type: "presentation",
      status: "final",
      filePath: "/documents/363FF870-465C-4D3E-8FC9-66BF082E15B9.pdf"
    }
  ];

  const meetingMinutes = [
    {
      topic: "Project Kickoff & Role Assignment",
      date: "June 5, 2025",
      attendees: ["Noor Almohammadi", "Maryam Al-Obaidan", "Amna Al-Zeyara"],
      status: "final",
      filePath: "/documents/ECEN403-FSRAssignment 2.pdf"
    },
    {
      topic: "Literature Review Discussion",
      date: "June 12, 2025",
      attendees: ["All team members"],
      status: "final",
      filePath: "/documents/ECEN403-FSRAssignment.pdf"
    },
    {
      topic: "Requirements Definition Session",
      date: "June 19, 2025",
      attendees: ["All team members"],
      status: "final",
      filePath: "/documents/ECEN403-FSRAssignment.pdf"
    },
    {
      topic: "Benchmarking Analysis",
      date: "June 21, 2025",
      attendees: ["All team members"],
      status: "final",
      filePath: "/documents/Ecen403-Benchmarkingassignment2.pdf"
    },
    {
      topic: "Validation Milestone Review",
      date: "June 22, 2025",
      attendees: ["All team members"],
      status: "final",
      filePath: "/documents/Ecen403-Milestones_and_Validation_Plan_Draft2.pdf"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      proposal: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      requirements: 'bg-green-500/20 text-green-300 border-green-500/30',
      technical: 'bg-red-500/20 text-red-300 border-red-500/30',
      research: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      design: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      report: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      presentation: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
    };
    return colors[type] || 'bg-slate-500/20 text-slate-300 border-slate-500/30';
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      final: 'bg-green-500/20 text-green-300 border-green-500/30',
      draft: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'in-progress': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      upcoming: 'bg-slate-500/20 text-slate-300 border-slate-500/30'
    };
    return colors[status] || 'bg-slate-500/20 text-slate-300 border-slate-500/30';
  };

  const handleDownload = (filePath: string, fileName: string) => {
    if (!filePath) {
      alert('File not available yet');
      return;
    }
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName || filePath.split('/').pop();
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (filePath: string) => {
    if (!filePath) {
      alert('File not available yet');
      return;
    }
    window.open(filePath, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reports And Documentation
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access project deliverables and downloadable resources
          </p>
        </div>

        <Card className="bg-orange-900/20 border-orange-500/30 mb-8">
          <CardHeader>
            <CardTitle className="text-orange-300 text-lg flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Document Access Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-200">
              Final documents listed below are for reference and academic use only. Please contact the development team for full repositories or collaborative access.
            </p>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <FileText className="h-8 w-8 text-green-400 mr-3" />
              Project Documents
            </CardTitle>
            <CardDescription className="text-slate-300">
              Reports, deliverables, and presentations for the AI-Social Robot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="mb-3">
                    <h3 className="text-white font-semibold mb-1">{doc.title}</h3>
                    <p className="text-slate-300 text-sm mb-1">{doc.description}</p>
                    <p className="text-slate-400 text-xs">{doc.date}</p>
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
                      className="text-xs"
                      onClick={() =>
                        handleDownload(doc.filePath, `${doc.title.replace(/\s+/g, "-").toLowerCase()}.pdf`)
                      }
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Download
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
              Team meeting summaries and discussion archives
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
                        className="text-xs"
                        onClick={() => handleView(meeting.filePath)}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        View
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
