import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Award, TrendingUp, Users, Building2, Lightbulb, CheckCircle } from 'lucide-react';

export default function CityPlatform() {
  const [activeTab, setActiveTab] = useState('ideas');
  const [userRole, setUserRole] = useState('resident'); // 'resident' or 'official'

  const ideas = [
    {
      id: 1,
      title: "Expand dedicated bike lanes in downtown",
      author: "Sarah Chen",
      votes: 342,
      comments: 28,
      status: "under-review",
      impact: "Under review by Transportation Dept - Scheduled for Q2 2024 budget"
    },
    {
      id: 2,
      title: "Install free WiFi in city parks",
      author: "Michael Rodriguez",
      votes: 289,
      comments: 45,
      status: "implemented",
      impact: "Completed - WiFi installed in 5 parks (January 2024)"
    },
    {
      id: 3,
      title: "Add night bus routes",
      author: "Jessica Park",
      votes: 456,
      comments: 67,
      status: "in-progress",
      impact: "In progress - 3 pilot routes launching in March"
    }
  ];

  const StatusBadge = ({ status }) => {
    const styles = {
      'under-review': 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'implemented': 'bg-green-100 text-green-800'
    };
    const labels = {
      'under-review': 'Under Review',
      'in-progress': 'In Progress',
      'implemented': 'Implemented'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">CITY</h1>
              </div>
              <nav className="flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  Top Ideas
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  Polls
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  Leaderboard
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  Submit Ideas
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Building our city together
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A platform where citizen voices lead to real change
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            + Submit New Idea
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Ideas Submitted</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">1,247</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Ideas Implemented</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">89</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600">Active Citizens</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">12,450</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('ideas')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'ideas'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Citizen Ideas
          </button>
          <button
            onClick={() => setActiveTab('initiatives')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'initiatives'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            City Initiatives
          </button>
        </div>

        {/* Ideas List */}
        <div className="space-y-4">
          {ideas.map((idea) => (
            <div key={idea.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{idea.title}</h3>
                    <StatusBadge status={idea.status} />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Submitted by: {idea.author}</p>
                </div>
              </div>

              {/* Impact Section - Critical for showing real-world results */}
              {idea.impact && (
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4 rounded">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">Real-World Impact</p>
                      <p className="text-sm text-blue-800">{idea.impact}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="font-medium">{idea.votes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-medium">{idea.comments}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );