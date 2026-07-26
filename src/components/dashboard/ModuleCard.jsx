import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModuleCard = ({ module }) => {
  const navigate = useNavigate();

  const handleStartModule = () => {
    // ✅ Use the module's path property
    if (module.path) {
      navigate(module.path);
    } else {
      // Fallback based on module title (if path is missing)
      const title = module.title.toLowerCase();
      if (title.includes('moodle')) {
        navigate('/moodle');
      } else if (title.includes('cu portal')) {
        navigate('/cu-portal');
      } else if (title.includes('turnitin')) {
        navigate('/turnitin');
      } else if (title.includes('office')) {
        navigate('/office365');
      } else if (title.includes('grammarly')) {
        navigate('/grammarly');
      } else if (title.includes('internet')) {
        navigate('/internet-login');
      } else {
        navigate('/dashboard');
      }
    }
  };

  // Determine status badge color
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{module.icon || '📚'}</span>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{module.title}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(module.status)}`}>
              {module.status || 'Not Started'}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mt-3 text-sm">{module.description}</p>
      
      <button
        onClick={handleStartModule}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-full"
      >
        {module.status === 'completed' ? 'Review →' : 'Start Learning →'}
      </button>
    </div>
  );
};

export default ModuleCard;