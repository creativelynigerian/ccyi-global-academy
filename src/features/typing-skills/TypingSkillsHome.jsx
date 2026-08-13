import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';
import Checklist from '../../assets/modules/Checklist';

function TypingSkillsHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Typing Skills</h1>
      <p className="mb-8 text-gray-600">Improve your typing speed, accuracy, and ergonomic technique.</p>
      
      <div className="mb-8">
        <VideoPlayer title="Touch Typing Tutorial" videoUrl="https://www.youtube.com/embed/iFX_4z3oRtY" />
      </div>

      <div className="mb-8 grid gap-4">
        <LessonCard title="Home Row Position" content="Learn the proper finger placement on the ASDF and JKL; keys for efficient typing." />
        <LessonCard title="Typing Practice Techniques" content="Use online tools and muscle memory exercises to increase your Words Per Minute (WPM)." />
        <LessonCard title="Ergonomics" content="Correct posture, wrist placement, and taking breaks to prevent Repetitive Strain Injuries (RSI)." />
      </div>

      <div className="mb-8">
        <Checklist items={["Practiced home row positioning", "Took a typing speed test", "Adjusted my chair and posture"]} />
      </div>

      <div className="mb-8">
        <QuizCard title="Typing Fundamentals Quiz" questions={[
          { question: "What is the average goal WPM for a professional?", options: ["10 WPM", "40-60 WPM", "100 WPM", "1 WPM"], correct: 1 }
        ]} />
      </div>
    </div>
  );
}

export default TypingSkillsHome;




