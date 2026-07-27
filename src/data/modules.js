const modules = [
  {
    id: 1,
    title: "Moodle LMS",
    description: "Complete your Moodle training and learn to manage courses",
    icon: "🎓",
    status: "in-progress",
    path: "/moodle"  // ✅ This should be /moodle, NOT /cu-portal
  },
  {
    id: 2,
    title: "CU Portal",
    description: "Access the CCYI Global Academy student portal",
    icon: "🏛️",
    status: "not-started",
    path: "/cu-portal"  // ✅ This should be /cu-portal
  },
  {
    id: 3,
    title: "Turnitin",
    description: "Learn to use Turnitin for plagiarism detection",
    icon: "📝",
    status: "not-started",
    path: "/turnitin"  // ✅ This should be /turnitin
  },
  {
    id: 4,
    title: "Office 365",
    description: "Master Office 365 tools for collaboration",
    icon: "💼",
    status: "not-started",
    path: "/office365"  // ✅ This should be /office365
  },
  {
    id: 5,
    title: "Internet Login",
    description: "Learn to connect to university internet services",
    icon: "🌐",
    status: "not-started",
    path: "/internet-login"  // ✅ This should be /internet-login
  },
  {
    id: 6,
    title: "Grammarly",
    description: "Improve your writing with Grammarly",
    icon: "✍️",
    status: "not-started",
    path: "/grammarly"  // ✅ This should be /grammarly
  }
];

export default modules;