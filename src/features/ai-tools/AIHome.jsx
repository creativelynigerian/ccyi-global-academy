// src/features/ai-tools/AIHome.jsx
import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';

function AIHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Tools</h1>
      
      {/* 1. Use the Video Component */}
      <div className="mb-8">
        <VideoPlayer 
          title="Introduction to AI Tools"
          videoUrl="https://www.youtube.com/embed/ut73yT4dx5g"
        />
      </div>

      {/* 2. Use the Lesson Card Component */}
      <div className="mb-8 grid gap-4">
        <LessonCard 
          title="What is ChatGPT?"
          content="Learn how to use ChatGPT for academic and professional tasks..."
        />
        <LessonCard 
          title="AI Ethics"
          content="Understand the responsible use of AI in your workflow..."
        />
      </div>

      {/* 3. Use the Quiz Component */}
      <div className="mb-8">
        <QuizCard 
          title="AI Tools Quiz"
          questions={[
            { question: "What does AI stand for?", options: ["Artificial Intelligence", "Automated Input", "Advanced Internet"], correct: 0 },
            // ... add more questions
          ]}
        />
      </div>
    </div>
  );
}

export default AIHome;




