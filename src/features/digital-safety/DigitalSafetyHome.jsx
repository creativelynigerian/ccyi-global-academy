import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';
import Checklist from '../../assets/modules/Checklist';

function DigitalSafetyHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Digital Safety</h1>
      <p className="mb-8 text-gray-600">Learn to protect your privacy online and identify malicious attacks like phishing.</p>
      
      <div className="mb-8">
        <VideoPlayer title="Digital Safety 101" videoUrl="https://www.youtube.com/embed/TsJ8tMdlz5w" />
      </div>

      <div className="mb-8 grid gap-4">
        <LessonCard title="Two-Factor Authentication (2FA)" content="Understand what 2FA is and how to enable it on your accounts for an extra layer of protection beyond just a password." />
        <LessonCard title="Spotting Phishing Attacks" content="Learn to recognize fake emails, text messages, and websites designed to steal your login credentials or personal information." />
        <LessonCard title="Social Media Privacy" content="Review your privacy settings on platforms like LinkedIn, Facebook, and Instagram to prevent oversharing personal details." />
        <LessonCard title="Public Wi-Fi Risks" content="Understand the dangers of using public Wi-Fi networks and learn why you should always use a VPN when connecting outside your home or office." />
      </div>

      <div className="mb-8">
        <Checklist items={["Enabled 2FA on my school/work account", "Reviewed social media privacy settings", "Learned 3 signs of a phishing email", "Downloaded a VPN for public Wi-Fi use"]} />
      </div>

      <div className="mb-8">
        <QuizCard title="Digital Safety Quiz" questions={[
          { question: "What does 2FA stand for?", options: ["Two-Factor Authentication", "Two-Form Access", "Digital File Access", "Temporary File Access"], correct: 0 },
          { question: "What is a common sign of a phishing email?", options: ["A spelling error in the email", "A generic greeting like 'Dear User'", "A suspicious link", "All of the above"], correct: 3 }
        ]} />
      </div>
    </div>
  );
}

export default DigitalSafetyHome;




