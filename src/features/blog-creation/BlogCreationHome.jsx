import React from 'react';
import LessonCard from '../../assets/modules/LessonCard';
import VideoPlayer from '../../assets/modules/VideoPlayer';
import QuizCard from '../../assets/modules/QuizCard';
import Checklist from '../../assets/modules/Checklist';

function BlogCreationHome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Creation</h1>
      <p className="mb-8 text-gray-600">Learn how to write, publish, and promote engaging blog content.</p>
      
      <div className="mb-8">
        <VideoPlayer title="How to Start a Blog" videoUrl="https://www.youtube.com/embed/svtuH_7bTtM" />
      </div>

      <div className="mb-8 grid gap-4">
        <LessonCard title="Content Planning" content="Brainstorming topics, identifying your audience, and creating an editorial calendar." />
        <LessonCard title="Writing Engaging Posts" content="Using headlines, lists, images, and SEO keywords to improve readability." />
        <LessonCard title="Platforms and Publishing" content="An overview of WordPress, Medium, and custom website platforms." />
      </div>

      <div className="mb-8">
        <Checklist items={["Chose a blog niche", "Wrote a draft post", "Researched SEO keywords"]} />
      </div>

      <div className="mb-8">
        <QuizCard title="Blogging Basics Quiz" questions={[
          { question: "What does SEO stand for?", options: ["Search Engine Optimization", "Standard Entry Output", "System Editing Online", "Special Electronic Order"], correct: 0 }
        ]} />
      </div>
    </div>
  );
}

export default BlogCreationHome;




