import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';
import Checklist from '../../assets/modules/Checklist';

function ComputerFundamentalsHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Computer Fundamentals</h1>
      <p className="mb-8 text-gray-600">Learn the basics of computer hardware, software, and file management.</p>
      
      <div className="mb-8">
        <VideoPlayer title="Computer Basics Explained" videoUrl="https://www.youtube.com/embed/y2kg3MO2Jq0" />
      </div>

      <div className="mb-8 grid gap-4">
        <LessonCard title="Hardware vs Software" content="Understanding the difference between physical components (CPU, RAM) and programs." />
        <LessonCard title="File Management" content="Organize your computer using folders, directories, and file naming conventions." />
        <LessonCard title="Operating Systems" content="An introduction to Windows, macOS, and Linux interfaces." />
      </div>

      <div className="mb-8">
        <Checklist items={["Identified computer hardware", "Created a folder structure", "Practiced using keyboard shortcuts"]} />
      </div>

      <div className="mb-8">
        <QuizCard title="Computer Basics Quiz" questions={[
          { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Program Utility", "Central Programming Unit", "Core Performance Usage"], correct: 0 }
        ]} />
      </div>
    </div>
  );
}

export default ComputerFundamentalsHome;




