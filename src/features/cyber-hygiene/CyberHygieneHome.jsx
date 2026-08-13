import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';
import Checklist from '../../assets/modules/Checklist';

function CyberHygieneHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cyber Hygiene</h1>
      <p className="mb-8 text-gray-600">Develop daily habits to keep your computer, data, and identity safe from cyber threats.</p>
      
      <div className="mb-8">
        <VideoPlayer title="Cyber Hygiene Best Practices" videoUrl="https://www.youtube.com/embed/U0epP4Zg7n0" />
      </div>

      <div className="mb-8 grid gap-4">
        <LessonCard title="Software & OS Updates" content="Learn why keeping your Operating System, web browsers, and antivirus software fully updated is critical for closing security holes." />
        <LessonCard title="Strong Password Management" content="Understand how to create unique, complex passwords for every account and the importance of using a trusted Password Manager." />
        <LessonCard title="Safe Browsing & Downloads" content="Learn how to spot HTTPS connections, avoid malicious pop-ups, and verify the safety of files before downloading." />
        <LessonCard title="The 3-2-1 Backup Strategy" content="Protect your files by keeping 3 copies of your data, on 2 different media types, with 1 copy stored off-site (like the cloud)." />
      </div>

      <div className="mb-8">
        <Checklist items={["Checked for OS updates and installed them", "Changed a weak password to a strong one", "Performed a full antivirus scan", "Backed up important files to the cloud"]} />
      </div>

      <div className="mb-8">
        <QuizCard title="Cyber Hygiene Quiz" questions={[
          { question: "How often should you install software security updates?", options: ["Only when your computer is slow", "As soon as they are available", "Once a year", "Never"], correct: 1 },
          { question: "What is a good practice for passwords?", options: ["Use your pet's name", "Use the same password for everything", "Use a unique password and a Password Manager", "Write them down on sticky notes"], correct: 2 }
        ]} />
      </div>
    </div>
  );
}

export default CyberHygieneHome;




