import React, { useState } from 'react';

const CourseCreatorWizard = ({ courseData, onUpdate, onNext, disciplines }) => {
  const [localData, setLocalData] = useState(courseData);
  const [errors, setErrors] = useState({});

  const styles = {
    container: {
      padding: '24px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280',
      marginBottom: '24px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '6px'
    },
    required: {
      color: '#dc2626'
    },
    input: {
      width: '100%',
      padding: '10px 14px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.3s'
    },
    inputFocus: {
      borderColor: '#2563eb',
      boxShadow: '0 0 0 3px rgba(37,99,235,0.1)'
    },
    textarea: {
      width: '100%',
      padding: '10px 14px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
      minHeight: '100px',
      fontFamily: 'inherit',
      resize: 'vertical',
      transition: 'all 0.3s'
    },
    select: {
      width: '100%',
      padding: '10px 14px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
      background: 'white',
      transition: 'all 0.3s'
    },
    error: {
      color: '#dc2626',
      fontSize: '13px',
      marginTop: '4px'
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    objectivesList: {
      marginTop: '12px'
    },
    objectiveItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      background: '#f3f4f6',
      borderRadius: '6px',
      marginBottom: '8px'
    },
    addButton: {
      padding: '8px 16px',
      background: '#e5e7eb',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '500',
      transition: 'all 0.3s'
    },
    addButtonHover: {
      background: '#d1d5db'
    },
    removeButton: {
      padding: '4px 8px',
      background: '#fee2e2',
      border: 'none',
      borderRadius: '4px',
      color: '#dc2626',
      cursor: 'pointer',
      fontSize: '12px'
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e5e7eb'
    },
    button: {
      padding: '10px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    buttonPrimary: {
      background: '#2563eb',
      color: 'white'
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleObjectiveAdd = () => {
    const input = document.getElementById('newObjective');
    const value = input.value.trim();
    if (value) {
      setLocalData({
        ...localData,
        objectives: [...localData.objectives, value]
      });
      input.value = '';
    }
  };

  const handleObjectiveRemove = (index) => {
    setLocalData({
      ...localData,
      objectives: localData.objectives.filter((_, i) => i !== index)
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!localData.title.trim()) newErrors.title = 'Course title is required';
    if (!localData.level) newErrors.level = 'Please select a level';
    if (!localData.discipline) newErrors.discipline = 'Please select a discipline';
    if (localData.objectives.length === 0) {
      newErrors.objectives = 'Please add at least one learning objective';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onUpdate(localData);
      onNext();
    }
  };

  // Get discipline options based on level
  const getDisciplineOptions = () => {
    if (!localData.level) return [];
    const levelData = disciplines[localData.level];
    if (!levelData) return [];
    return levelData.disciplines || [];
  };

  // Get level label
  const getLevelLabel = () => {
    const levelMap = {
      nuc: 'NUC (University - CCMAS)',
      jamb: 'JAMB (UTME)',
      ssc: 'SSCE (WAEC/NECO)'
    };
    return levelMap[localData.level] || '';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 Course Details</h2>
      <p style={styles.subtitle}>
        Enter the basic information about your course
      </p>

      {/* Course Title */}
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Course Title <span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="e.g., Introduction to Government, Engineering Mathematics"
          value={localData.title}
          onChange={handleChange}
          style={styles.input}
          onFocus={(e) => {
            e.target.style.borderColor = '#2563eb';
            e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#d1d5db';
            e.target.style.boxShadow = 'none';
          }}
        />
        {errors.title && <div style={styles.error}>{errors.title}</div>}
      </div>

      {/* Level and Discipline */}
      <div style={styles.row}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Level <span style={styles.required}>*</span>
          </label>
          <select
            name="level"
            value={localData.level}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Select level</option>
            <option value="nuc">🏛️ NUC (University - CCMAS)</option>
            <option value="jamb">📝 JAMB (UTME)</option>
            <option value="ssc">🎓 SSCE (WAEC/NECO)</option>
          </select>
          {errors.level && <div style={styles.error}>{errors.level}</div>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Discipline <span style={styles.required}>*</span>
          </label>
          <select
            name="discipline"
            value={localData.discipline}
            onChange={handleChange}
            style={styles.select}
            disabled={!localData.level}
          >
            <option value="">Select discipline</option>
            {getDisciplineOptions().map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
          {errors.discipline && <div style={styles.error}>{errors.discipline}</div>}
          {localData.level && !localData.discipline && (
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
              {getLevelLabel()}
            </div>
          )}
        </div>
      </div>

      {/* Course Description */}
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Course Description
        </label>
        <textarea
          name="description"
          placeholder="Describe the purpose and content of this course..."
          value={localData.description}
          onChange={handleChange}
          style={styles.textarea}
          onFocus={(e) => {
            e.target.style.borderColor = '#2563eb';
            e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#d1d5db';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Learning Objectives */}
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Learning Objectives <span style={styles.required}>*</span>
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            id="newObjective"
            type="text"
            placeholder="Add a learning objective..."
            style={{ ...styles.input, flex: 1 }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleObjectiveAdd();
              }
            }}
          />
          <button
            style={{ ...styles.addButton }}
            onMouseEnter={(e) => e.target.style.background = '#d1d5db'}
            onMouseLeave={(e) => e.target.style.background = '#e5e7eb'}
            onClick={handleObjectiveAdd}
          >
            + Add
          </button>
        </div>
        {errors.objectives && <div style={styles.error}>{errors.objectives}</div>}
        
        <div style={styles.objectivesList}>
          {localData.objectives.map((obj, index) => (
            <div key={index} style={styles.objectiveItem}>
              <span>{index + 1}. {obj}</span>
              <button
                style={styles.removeButton}
                onClick={() => handleObjectiveRemove(index)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <button
          style={{
            ...styles.button,
            ...styles.buttonPrimary,
            ...(!localData.title || !localData.level || !localData.discipline || localData.objectives.length === 0 ? styles.buttonDisabled : {})
          }}
          onClick={handleNext}
          disabled={!localData.title || !localData.level || !localData.discipline || localData.objectives.length === 0}
          onMouseEnter={(e) => {
            if (!e.target.disabled) {
              e.target.style.background = '#1d4ed8';
            }
          }}
          onMouseLeave={(e) => {
            if (!e.target.disabled) {
              e.target.style.background = '#2563eb';
            }
          }}
        >
          Generate Course with AI →
        </button>
      </div>
    </div>
  );
};

export default CourseCreatorWizard;