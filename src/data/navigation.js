export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { id: 'moodle', label: 'Moodle LMS', path: '/moodle', icon: 'GraduationCap' },
  { id: 'turnitin', label: 'Turnitin', path: '/turnitin', icon: 'CheckSquare' },
  { id: 'office365', label: 'Office 365', path: '/office365', icon: 'FileText' },
  { id: 'internet', label: 'Internet Login', path: '/internet-login', icon: 'Wifi' },
  { id: 'grammarly', label: 'Grammarly', path: '/grammarly', icon: 'PenTool' },
  { id: 'cuportal', label: 'CU Portal', path: '/cu-portal', icon: 'Calendar' },
  { id: 'certificate', label: 'Certificate', path: '/certificate', icon: 'Award' },
  { id: 'resources', label: 'Resources', path: '/resources', icon: 'BarChart' },
  { id: 'support', label: 'Support', path: '/support', icon: 'HelpCircle' },
  { id: 'ai-course-creator', label: 'AI Course Creator', path: '/ai-course-creator', icon: 'BrainCircuit' },

  // NEW FEATURES BELOW
  { id: 'microsoft-office', label: 'Microsoft Office', path: '/microsoft-office', icon: 'FileText', subItems: [
      { label: 'Word', path: '/microsoft-office/word' },
      { label: 'Excel', path: '/microsoft-office/excel' },
      { label: 'PowerPoint', path: '/microsoft-office/powerpoint' },
      { label: 'Access', path: '/microsoft-office/access' },
      { label: 'Outlook', path: '/microsoft-office/outlook' },
    ]
  },
  { id: 'ai-tools', label: 'AI Tools', path: '/ai-tools', icon: 'Sparkles' },
  { id: 'digital-safety', label: 'Digital Safety', path: '/digital-safety', icon: 'ShieldAlert' },
  { id: 'cyber-hygiene', label: 'Cyber Hygiene', path: '/cyber-hygiene', icon: 'Lock' },
  { id: 'google-workspace', label: 'Google Workspace', path: '/google-workspace', icon: 'Globe' },
  { id: 'email', label: 'Email', path: '/email', icon: 'Mail' },
  { id: 'blog-creation', label: 'Blog Creation', path: '/blog-creation', icon: 'PenTool' },
  { id: 'computer-fundamentals', label: 'Computer Fundamentals', path: '/computer-fundamentals', icon: 'Monitor' },
  { id: 'typing-skills', label: 'Typing Skills', path: '/typing-skills', icon: 'Keyboard' },
];
