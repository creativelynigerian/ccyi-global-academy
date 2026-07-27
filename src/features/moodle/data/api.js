// API base URL - update to match your backend
const API_BASE = '/api/moodle';

export const getMoodleCourses = async () => {
  const response = await fetch(`${API_BASE}/courses`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
};

export const createMoodleCourse = async (courseData) => {
  const response = await fetch(`${API_BASE}/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` // if using JWT
    },
    body: JSON.stringify({
      fullname: courseData.fullname,
      shortname: courseData.shortname,
      summary: courseData.summary,
      categoryid: parseInt(courseData.categoryId) || 1,
      startdate: courseData.startdate,
      enddate: courseData.enddate
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create course');
  }

  return response.json();
};