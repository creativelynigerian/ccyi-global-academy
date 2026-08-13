import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';
import Checklist from '../../assets/modules/Checklist';

function GoogleWorkspaceHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Google Workspace</h1>
      <p className="mb-8 text-gray-600">Master cloud-based communication and document collaboration using Google's powerful suite of tools.</p>
      
      <div className="mb-8">
        <VideoPlayer title="Introduction to Google Workspace" videoUrl="https://www.youtube.com/embed/7nG8I3tSjN0" />
      </div>

      <div className="mb-8 grid gap-4">
        <LessonCard title="Gmail & Calendar" content="Master advanced Gmail features (labels, filters) and learn to schedule meetings, share calendars, and manage time zones." />
        <LessonCard title="Google Drive & Sharing" content="Manage your cloud storage, create organized folder structures, and control viewing/editing permissions for shared files." />
        <LessonCard title="Docs & Sheets" content="Collaborate in real-time using Google Docs for text and Google Sheets for data organization, using formulas and charts." />
        <LessonCard title="Google Meet" content="Host and join video meetings, share your screen, use live captions, and collaborate via chat during meetings." />
      </div>

      <div className="mb-8">
        <Checklist items={["Opened Google Drive and created a folder", "Created a collaborative Google Doc", "Used a formula in Google Sheets", "Scheduled a meeting on Google Calendar"]} />
      </div>

      <div className="mb-8">
        <QuizCard title="Google Workspace Quiz" questions={[
          { question: "Which Google tool is used for real-time document collaboration?", options: ["Sheets", "Meet", "Docs", "Forms"], correct: 2 },
          { question: "How can you securely share a Google Drive file?", options: ["Send the link to everyone", "Set permissions to 'Anyone with the link' or specific emails", "Send it as a PDF attachment", "Print it out"], correct: 1 }
        ]} />
      </div>
    </div>
  );
}

export default GoogleWorkspaceHome;




