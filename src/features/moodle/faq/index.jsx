import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "How do I log in to Moodle?",
    answer: "Go to moodle.covenantuniversity.edu.ng and use your staff credentials provided by IT. If you've forgotten your password, use the 'Forgot password' link on the login page."
  },
  {
    id: 2,
    question: "Why can't I create a new course?",
    answer: "You need 'Course Creator' permissions to create courses. Contact IT Support at itsupport@covenantuniversity.edu.ng to request this role."
  },
  {
    id: 3,
    question: "How do I add students to my course?",
    answer: "Go to your course > Click 'Participants' > Click 'Enroll users' > Search for students by name or email > Select the student and click 'Enroll'."
  },
  {
    id: 4,
    question: "Can I reuse content from a previous course?",
    answer: "Yes! In your new course, go to 'Settings' > 'Import' > Select the course you want to copy from > Choose what to import (materials, activities, etc.) > Click 'Import'."
  },
  {
    id: 5,
    question: "What's a sandbox course?",
    answer: "A sandbox course is a practice environment where you can experiment with Moodle features without affecting real courses. Request one from IT Support."
  },
  {
    id: 6,
    question: "How do I add assignments to my course?",
    answer: "Turn editing on > Click 'Add an activity or resource' > Select 'Assignment' > Configure the assignment settings > Click 'Save and display'."
  }
];

const MoodleFAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">❓ Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-6">Find answers to common questions about Moodle LMS.</p>
      
      <div className="space-y-3">
        {faqData.map(faq => (
          <div key={faq.id} className="bg-white rounded-lg shadow overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <span className="text-gray-500 text-xl">
                {openId === faq.id ? '−' : '+'}
              </span>
            </button>
            {openId === faq.id && (
              <div className="px-6 py-4 border-t border-gray-100 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodleFAQ;