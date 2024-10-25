import React from 'react';
import { Info, Brain, Target, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart & Quick Answers",
      description: "Get instant, AI-powered responses to any question. Our platform provides clear, concise answers tailored to your understanding level."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Learning",
      description: "Experience education that adapts to you. Based on your age, education level, and grade, we customize content to match your learning needs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Generate custom quizzes on any topic to test your knowledge and reinforce your learning through active engagement."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-center mb-6">
        <Info className="w-10 h-10 text-indigo-600" />
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Smart Learning</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to the future of education. Our AI-powered platform delivers personalized learning experiences, 
          making education more accessible, engaging, and effective for everyone.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-b from-indigo-50 to-white">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Smart Learning?</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
            <span>Adaptive learning system that grows with you</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
            <span>Instant answers to your academic questions</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
            <span>Custom quiz generation for effective practice</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
            <span>Comprehensive learning resources and blog articles</span>
          </li>
        </ul>
      </div>
    </div>
  );
}