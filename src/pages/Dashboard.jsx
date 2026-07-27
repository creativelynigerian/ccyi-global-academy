import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  
  const [modules, setModules] = useState(() => {
    const saved = localStorage.getItem('trainingModules');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Moodle LMS', icon: '??', status: 'not-started', progress: 0 },
      { id: 2, title: 'Turnitin', icon: '??', status: 'not-started', progress: 0 },
      { id: 3, title: 'Office 365', icon: '??', status: 'not-started', progress: 0 },
      { id: 4, title: 'Internet Login', icon: '??', status: 'not-started', progress: 0 },
      { id: 5, title: 'Grammarly', icon: '??', status: 'not-started', progress: 0 },
      { id: 6, title: 'CU Portal', icon: '???', status: 'not-started', progress: 0 },
    ];
  });

  const [certificate, setCertificate] = useState(() => {
    return localStorage.getItem('certificateAwarded') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('trainingModules', JSON.stringify(modules));
  }, [modules]);

  const handleStartTraining = (id) => {
    setModules(modules.map(module => 
      module.id === id && module.status === 'not-started'
        ? { ...module, status: 'in-progress', progress: 10 }
        : module
    ));
  };

  const handleCompleteModule = (id) => {
    setModules(modules.map(module => 
      module.id === id
        ? { ...module, status: 'completed', progress: 100 }
        : module
    ));
  };

  const handleProgress = (id, progress) => {
    setModules(modules.map(module => 
      module.id === id
        ? { ...module, progress: Math.min(progress, 100) }
        : module
    ));
  };

  const allCompleted = modules.every(m => m.status === 'completed');
  const completedCount = modules.filter(m => m.status === 'completed').length;
  const totalModules = modules.length;
  const overallProgress = Math.round((completedCount / totalModules) * 100);

  useEffect(() => {
    if (allCompleted && !certificate) {
      setCertificate(true);
      localStorage.setItem('certificateAwarded', 'true');
      setTimeout(() => {
        alert('?? Congratulations! You have completed all training modules!');
      }, 500);
    }
  }, [allCompleted, certificate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const resetTraining = () => {
    if (window.confirm('Are you sure you want to reset all training progress?')) {
      const resetModules = modules.map(m => ({ ...m, status: 'not-started', progress: 0 }));
      setModules(resetModules);
      setCertificate(false);
      localStorage.removeItem('certificateAwarded');
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo-section">
            <h1>CCYI Global Academy</h1>
            <span className="subtitle">Learning Platform</span>
          </div>
          <nav className="nav-links">
            <Link to="/">?? Home</Link>
            <Link to="/about">?? About</Link>
            <Link to="/moodle">?? Moodle</Link>
            <Link to="/office365">?? Office 365</Link>
            <Link to="/grammarly">?? Grammarly</Link>
            <Link to="/turnitin">?? Turnitin</Link>
            <Link to="/certificate">?? Certificate</Link>
            <Link to="/support">??? Support</Link>
          </nav>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="welcome-section">
          <div className="welcome-text">
            <h2>Welcome to CU Onboarding</h2>
            <p className="sub-text">Your Digital Journey Starts Here</p>
            <p className="description">CCYI Global Academy's comprehensive onboarding portal helps you master all the digital platforms you need for academic success.</p>
            <div className="welcome-buttons">
              <button className="continue-btn">Get Started ?</button>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">??</div>
              <div className="stat-info">
                <h3>Training Modules</h3>
                <p className="stat-number">{totalModules}</p>
                <p className="stat-label">Available courses</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">??</div>
              <div className="stat-info">
                <h3>Platforms</h3>
                <p className="stat-number">8</p>
                <p className="stat-label">Digital tools</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">?</div>
              <div className="stat-info">
                <h3>Completed</h3>
                <p className="stat-number">{completedCount}</p>
                <p className="stat-label">Modules finished</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">??</div>
              <div className="stat-info">
                <h3>Certificate</h3>
                <p className={`stat-number ${certificate ? 'certified' : ''}`}>
                  {certificate ? '?? Awarded' : 'Pending'}
                </p>
                <p className="stat-label">Status</p>
              </div>
            </div>
          </div>
        </section>

        {certificate && (
          <div className="certificate-banner">
            <div className="certificate-content">
              <span className="certificate-icon">??</span>
              <div>
                <h3>?? Certificate Awarded!</h3>
                <p>You have successfully completed all training modules. Download your certificate below.</p>
              </div>
              <button className="certificate-btn" onClick={() => alert('Downloading certificate...')}>
                ?? Download Certificate
              </button>
            </div>
          </div>
        )}

        <section className="modules-section">
          <div className="modules-header">
            <h3 className="section-title">Training Modules</h3>
            <button className="reset-btn" onClick={resetTraining}>? Reset Progress</button>
          </div>
          <div className="modules-grid">
            {modules.map((module) => (
              <div key={module.id} className={`module-card ${module.status}`}>
                <div className="module-icon">{module.icon}</div>
                <h4>{module.title}</h4>
                <div className="module-progress">
                  <span className={`status-badge ${module.status}`}>
                    {module.status === 'completed' && '? Completed'}
                    {module.status === 'in-progress' && '? In Progress'}
                    {module.status === 'not-started' && '? Not Started'}
                  </span>
                  <div className="mini-progress">
                    <div className="mini-fill" style={{ width: `${module.progress}%` }}></div>
                  </div>
                  <div className="module-actions">
                    {module.status === 'not-started' && (
                      <button className="module-btn start" onClick={() => handleStartTraining(module.id)}>
                        Start Training
                      </button>
                    )}
                    {module.status === 'in-progress' && (
                      <>
                        <button className="module-btn progress" onClick={() => handleProgress(module.id, module.progress + 20)}>
                          +20% Progress
                        </button>
                        <button className="module-btn complete" onClick={() => handleCompleteModule(module.id)}>
                          Complete Module
                        </button>
                      </>
                    )}
                    {module.status === 'completed' && (
                      <span className="completed-badge">? Complete</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
