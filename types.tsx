export interface UserProfile {
    age: number;
    educationLevel: string;
    grade: string;
  }
  
  export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }
  
  export interface QuizState {
    questions: Question[];
    currentQuestion: number;
    score: number;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    content: string;
    category: string;
    date: string;
  }