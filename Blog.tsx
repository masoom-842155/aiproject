import React from 'react';
import { BookOpen, Clock, Tag } from 'lucide-react';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Get the Most Out of Smart Learning",
    content: "Our AI-powered platform adapts to your learning style and pace. Here are some tips to maximize your learning experience: 1) Set clear learning goals, 2) Use the quiz generator regularly, 3) Ask detailed questions...",
    category: "Learning Tips",
    date: "2024-03-20"
  },
  {
    id: 2,
    title: "Frequently Asked Questions About Our Platform",
    content: "Get answers to common questions about our Smart Learning Platform: How does the AI adapt to my level? What types of questions can I ask? How are quizzes generated? Find all the answers here...",
    category: "FAQ",
    date: "2024-03-19"
  },
  {
    id: 3,
    title: "Understanding Our Quiz Generation System",
    content: "Our quiz generator uses advanced AI to create personalized questions based on your topic of interest. Learn how it adapts to your education level and provides targeted learning experiences...",
    category: "Features",
    date: "2024-03-18"
  }
];

export default function Blog() {
  return (
    <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-center mb-6">
        <BookOpen className="w-10 h-10 text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-center mb-8">Learning Resources & Blog</h2>
      
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-6 last:border-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </div>
            </div>
            <p className="text-gray-600">{post.content}</p>
            <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium">
              Read More →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}