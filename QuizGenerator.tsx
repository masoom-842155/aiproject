import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import type { Question } from '../types';

export default function QuizGenerator() {
  const [topic, setTopic] = useState('');
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleGenerateQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate quiz generation
    const sampleQuiz: Question[] = [
      {
        id: 1,
        question: "What is the main benefit of our Smart Learning Platform?",
        options: [
          "Personalized learning experience",
          "Free coffee",
          "Gaming features",
          "Social networking"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "How does the platform adapt to users?",
        options: [
          "By user's favorite color",
          "By age, education level, and grade",
          "By zodiac sign",
          "It doesn't adapt"
        ],
        correctAnswer: 1
      }
    ];
    setQuiz(sampleQuiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (selectedIndex: number) => {
    if (quiz[currentQuestion].correctAnswer === selectedIndex) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Quiz Generator</h2>
      </div>

      {!quiz.length ? (
        <form onSubmit={handleGenerateQuiz} className="space-y-4">
          <div>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter topic for quiz..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Generate Quiz
          </button>
        </form>
      ) : showResults ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Quiz Complete!</h3>
          <p className="text-lg">Your score: {score}/{quiz.length}</p>
          <button
            onClick={() => {
              setQuiz([]);
              setTopic('');
            }}
            className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Another Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-4">
            Question {currentQuestion + 1} of {quiz.length}
          </h3>
          <p className="mb-4">{quiz[currentQuestion].question}</p>
          <div className="space-y-2">
            {quiz[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-3 text-left border border-gray-300 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}