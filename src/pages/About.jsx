import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <Link to="/" className="back-link">? Back to Dashboard</Link>
      
      <div className="about-header">
        <h1>About CU Onboarding</h1>
        <p>Your Digital Journey Starts Here</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>?? Our Mission</h2>
          <p>CCYI Global Academy's Learning Platform is designed to help new and existing faculty members master the digital platforms essential for academic excellence.</p>
        </div>

        <div className="about-section">
          <h2>?? What You'll Learn</h2>
          <ul>
            <li><strong>Moodle LMS</strong> - Course management, assignments, and grading</li>
            <li><strong>Office 365</strong> - Email, collaboration, and productivity tools</li>
            <li><strong>Grammarly</strong> - Academic writing and proofreading</li>
            <li><strong>Turnitin</strong> - Plagiarism detection and academic integrity</li>
            <li><strong>CU Portal</strong> - Student records and administrative services</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>?? Certification</h2>
          <p>Complete all six training modules to earn your <strong>CU Learning Platform Certificate</strong>. This certification demonstrates your proficiency with CCYI Global Academy's digital ecosystem.</p>
        </div>

        <div className="about-section">
          <h2>?? Need Help?</h2>
          <p>Visit our <Link to="/support">Support Center</Link> for assistance with any platform or technical issue.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
