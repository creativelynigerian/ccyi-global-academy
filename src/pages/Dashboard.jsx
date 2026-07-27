import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  
  // Load modules from localStorage or use default
  const [modules, setModules] = useState(() => {
    const saved = localStorage.getItem('trainingModules');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Moodle LMS', icon: '📚', status: 'not-started', progress: 0 },
      { id: 2, title: 'Turnitin', icon: '🔍', status: 'not-started', progress: 0 },
      { id: 3, title: 'Office 365', icon: '💼', status: 'not-started', progress: 0 },
      { id: 4, title: 'Internet Login', icon: '🌐', status: 'not-started', progress: 0 },
      { id: 5, title: 'Grammarly', icon: '✍️', status: 'not-started', progress: 0 },
      { id: 6, title: 'CU Portal', icon: '🏛️', status: 'not-started', progress: 0 },
    ];
  });

  const [certificate, setCertificate] = useState(() => {
    return localStorage.getItem('certificateAwarded') === 'true';
  });

  // Save modules to localStorage whenever they change
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

  // Check if all modules are completed
  const allCompleted = modules.every(m => m.status === 'completed');
  const completedCount = modules.filter(m => m.status === 'completed').length;
  const totalModules = modules.length;
  const overallProgress = Math.round((completedCount / totalModules) * 100);

  // Award certificate when all modules are completed
  useEffect(() => {
    if (allCompleted && !certificate) {
      setCertificate(true);
      localStorage.setItem('certificateAwarded', 'true');
      // Show certificate popup
      setTimeout(() => {
        alert('🎉 Congratulations! You have completed all training modules!');
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
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo-section">
            <h1>Covenant University</h1>
            <span className="subtitle">Faculty Onboarding</span>
          </div>
          <nav className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/moodle">Moodle LMS</Link>
            <Link to="/turnitin">Turnitin</Link>
            <Link to="/office365">Office 365</Link>
            <Link to="/internet-login">Internet Login</Link>
            <Link to="/grammarly">Grammarly</Link>
            <Link to="/cu-portal">CU Portal</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/support">Support</Link>
          </nav>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-text">
            <h2>Welcome Back 🎉</h2>
            <p>Faculty Digital Onboarding Portal</p>
            <p className="sub-text">Complete your onboarding journey and master the digital platforms used across Covenant University.</p>
            <button className="continue-btn">Continue Learning →</button>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <div className="stat-info">
                <h3>Training Modules</h3>
                <p className="stat-number">{totalModules}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <h3>Completed</h3>
                <p className="stat-number">{completedCount}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <h3>Overall Progress</h3>
                <p className="stat-number">{overallProgress}%</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${overallProgress}%` }}></div>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <div className="stat-info">
                <h3>Certificate</h3>
                <p className={`stat-status ${certificate ? 'completed' : 'pending'}`}>
                  {certificate ? '✅ Awarded' : 'Pending'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Banner */}
        {certificate && (
          <div className="certificate-banner">
            <div className="certificate-content">
              <span className="certificate-icon">🏆</span>
              <div>
                <h3>🎉 Certificate Awarded!</h3>
                <p>You have successfully completed all training modules. Download your certificate below.</p>
              </div>
              <button className="certificate-btn" onClick={() => alert('Downloading certificate...')}>
                📄 Download Certificate
              </button>
            </div>
          </div>
        )}

        {/* Modules Grid */}
        <section className="modules-section">
          <div className="modules-header">
            <h3 className="section-title">Training Modules</h3>
            <button className="reset-btn" onClick={resetTraining}>↺ Reset Progress</button>
          </div>
          <div className="modules-grid">
            {modules.map((module) => (
              <div key={module.id} className={`module-card ${module.status}`}>
                <div className="module-icon">{module.icon}</div>
                <h4>{module.title}</h4>
                <div className="module-progress">
                  <span className={`status-badge ${module.status}`}>
                    {module.status === 'completed' && '✅ Completed'}
                    {module.status === 'in-progress' && '⏳ In Progress'}
                    {module.status === 'not-started' && '⭕ Not Started'}
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
                      <span className="completed-badge">✅ Complete</span>
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
