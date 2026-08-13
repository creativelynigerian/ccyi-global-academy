const MOODLE_URL = 'https://ccyiglobalentwebng.com.ng/lms';
const TOKEN = 'YOUR_ACTUAL_TOKEN_HERE'; // <-- REPLACE THIS WITH YOUR ACTUAL TOKEN

export const moodleApi = {
  // Get all users (students)
  getUsers: async () => {
    const response = await fetch(
      `${MOODLE_URL}/webservice/rest/server.php?wstoken=${TOKEN}&wsfunction=core_user_get_users&criteria[0][key]=email&criteria[0][value]=%25&moodlewsrestformat=json`
    );
    return response.json();
  },

  // Get user grades for a specific course
  getUserGrades: async (courseId, userId) => {
    const response = await fetch(
      `${MOODLE_URL}/webservice/rest/server.php?wstoken=${TOKEN}&wsfunction=gradereport_user_get_grade_items&courseid=${courseId}&userid=${userId}&moodlewsrestformat=json`
    );
    return response.json();
  },

  // Get all courses
  getCourses: async () => {
    const response = await fetch(
      `${MOODLE_URL}/webservice/rest/server.php?wstoken=${TOKEN}&wsfunction=core_course_get_courses&moodlewsrestformat=json`
    );
    return response.json();
  },

  // Get enrolled users in a course
  getEnrolledUsers: async (courseId) => {
    const response = await fetch(
      `${MOODLE_URL}/webservice/rest/server.php?wstoken=${TOKEN}&wsfunction=core_enrol_get_enrolled_users&courseid=${courseId}&moodlewsrestformat=json`
    );
    return response.json();
  }
};

export default moodleApi;
