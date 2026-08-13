import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';
import Checklist from '../../assets/modules/Checklist';

function EmailHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Professional Email Communication</h1>
      <p className="mb-8 text-gray-600">Write clear, effective, and professional emails, and manage your inbox efficiently.</p>
      
      <div className="mb-8">
        <VideoPlayer title="Professional Email Etiquette" videoUrl="https://www.youtube.com/embed/l3P6d-qKdik" />
      </div>

      <div className="mb-8 grid gap-4">
        <LessonCard title="The Anatomy of an Email" content="Learn how to write clear subject lines, appropriate greetings, concise bodies, and professional email signatures." />
        <LessonCard title="Professional Tone & Clarity" content="Understand when to use formal vs. casual language, how to avoid common grammar mistakes, and how to organize your thoughts." />
        <LessonCard title="Inbox Zero Organization" content="Master the use of folders, labels, filters, and flags to keep your inbox organized, decluttered, and manageable." />
        <LessonCard title="Reply vs. Reply All" content="Learn the golden rule of when to use Reply All, when to BCC, and how to manage email threads professionally." />
      </div>

      <div className="mb-8">
        <Checklist items={["Created a professional email signature", "Read the company/school email policy", "Set up a folder to sort emails by topic", "Wrote a practice professional email"]} />
      </div>

      <div className="mb-8">
        <QuizCard title="Email Etiquette Quiz" questions={[
          { question: "What is a best practice for an email subject line?", options: ["Keep it vague", "Make it clear and brief", "Write a paragraph", "Use all caps"], correct: 1 },
          { question: "When should you use 'Reply All'?", options: ["Whenever you're talking to one person", "When your response is relevant to everyone on the original email", "Only when you are angry", "To forward spam"], correct: 1 }
        ]} />
      </div>
    </div>
  );
}

export default EmailHome;




