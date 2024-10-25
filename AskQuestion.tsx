import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI response
    setAnswer('This is a simulated AI response to your question. In a real implementation, this would connect to an AI service.');
    setQuestion('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Ask Anything</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ask your question here..."
            required
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Send className="w-4 h-4" />
          <span>Ask Question</span>
        </button>
      </form>

      {answer && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Answer:</h3>
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}