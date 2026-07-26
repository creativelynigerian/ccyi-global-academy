import React, { useState } from 'react';

const CourseCreationModal = ({ show, onClose, onSave, isSubmitting }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    shortname: '',
    summary: '',
    categoryId: '',
    startDate: '',
    endDate: ''
  });

  const [validationError, setValidationError] = useState('');

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullname.trim()) {
      setValidationError('Course name is required');
      return;
    }
    if (!formData.shortname.trim()) {
      setValidationError('Course short name is required');
      return;
    }

    const courseData = {
      ...formData,
      startdate: formData.startDate ? new Date(formData.startDate).getTime() / 1000 : undefined,
      enddate: formData.endDate ? new Date(formData.endDate).getTime() / 1000 : undefined
    };

    onSave(courseData);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">➕ Create New Training Course</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-light"
              disabled={isSubmitting}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit}>
            <div className="px-6 py-4">
              {validationError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  ⚠️ {validationError}
                </div>
              )}

              {/* Course Full Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="e.g., Faculty Training on Active Learning"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">
                  This will be displayed as the main course title
                </p>
              </div>

              {/* Course Short Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Short Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="shortname"
                  placeholder="e.g., ACTIVE-LEARN-2026"
                  value={formData.shortname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">
                  Used in URLs and admin views (max 10-15 characters)
                </p>
              </div>

              {/* Course Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Description
                </label>
                <textarea
                  name="summary"
                  rows={4}
                  placeholder="Describe the purpose and content of this training course..."
                  value={formData.summary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              {/* Course Category */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Category
                </label>
                <select
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select a category</option>
                  <option value="1">Faculty Training</option>
                  <option value="2">Professional Development</option>
                  <option value="3">Technical Skills</option>
                  <option value="4">Research Methods</option>
                  <option value="5">Pedagogy & Teaching</option>
                  <option value="6">Other</option>
                </select>
              </div>

              {/* Start and End Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Creating...
                  </>
                ) : (
                  'Create Course'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseCreationModal;