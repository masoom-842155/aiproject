import React from 'react';
import { useUserStore } from './store/userStore';
import ProfileSetup from './components/ProfileSetup';
import AskQuestion from './components/AskQuestion';
import QuizGenerator from './components/QuizGenerator';
import Blog from './components/Blog';
import About from './components/About';
import { GraduationCap } from 'lucide-react';

function App() {
  const profile = useUserStore((state) => state.profile);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Smart Learning</h1>
            </div>
            {profile && (
              <div className="text-sm text-gray-600">
                Level: {profile.educationLevel} | Grade: {profile.grade}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!profile ? (
          <div className="flex justify-center">
            <ProfileSetup />
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AskQuestion />
              <QuizGenerator />
            </div>
            <Blog />
          </div>
        )}
        <div className="mt-12">
          <About />
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">
              Smart Learning Platform - Personalized Education for Everyone
            </p>
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} The Debuggers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;