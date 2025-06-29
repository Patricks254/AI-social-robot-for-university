
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, MapPin, AlertCircle, Target, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Our Project
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Understanding the problem and our innovative solution for campus navigation
          </p>
        </div>

        {/* Introduction Section */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Bot className="h-8 w-8 text-green-400 mr-3" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg leading-relaxed">
              University environments can be challenging for new students and visitors unfamiliar with campus layout and services. 
              Our AI-Social Robot for University Assistance is designed to bridge this gap by providing personalized, 
              interactive guidance that helps users navigate campus with confidence and ease.
            </p>
          </CardContent>
        </Card>

        {/* Problem Statement */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <AlertCircle className="h-8 w-8 text-red-400 mr-3" />
              Problem Statement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h3 className="text-red-300 font-semibold mb-2">Reception desks often become crowded</h3>
              <p className="text-slate-300">Human staff may have limited knowledge and may not always be available</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h3 className="text-red-300 font-semibold mb-2">Lack of interactive support</h3>
              <p className="text-slate-300">Limited support for student navigation and engagement on campus</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h3 className="text-red-300 font-semibold mb-2">Navigation challenges</h3>
              <p className="text-slate-300">New students and visitors struggle with finding locations and understanding campus services</p>
            </div>
          </CardContent>
        </Card>

        {/* Objective */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Target className="h-8 w-8 text-green-400 mr-3" />
              Project Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-4">Our Mission</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Robot that recognizes students, gathers name, major, and ID, and provides spoken directions
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  For visitors, the robot asks about their purpose of visit and guides them to relevant locations
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Can also play the Aggie song for entertainment and campus spirit
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Why It Matters */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Users className="h-8 w-8 text-blue-400 mr-3" />
              Why It Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-blue-300 font-semibold mb-2">Student Confidence</h3>
                <p className="text-slate-300">Helps students feel confident and independent on campus</p>
              </div>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-blue-300 font-semibold mb-2">Staff Efficiency</h3>
                <p className="text-slate-300">Reduces staff workload and enhances accessibility for all users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Design Advantages */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
              Our Design Advantages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Affordable & User-Friendly</h3>
                <p className="text-slate-300 text-sm">Cost-effective solution with intuitive interface</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Open-Source Tools</h3>
                <p className="text-slate-300 text-sm">Built with Python, Arduino, and accessible technologies</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Easy Maintenance</h3>
                <p className="text-slate-300 text-sm">Simple setup and maintenance requirements</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Campus-Specific</h3>
                <p className="text-slate-300 text-sm">Designed specifically for campus help and navigation</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Real Needs Focus</h3>
                <p className="text-slate-300 text-sm">Focuses on actual navigation and direction needs</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Clear Directions</h3>
                <p className="text-slate-300 text-sm">LCD screen displays readable directions and information</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
