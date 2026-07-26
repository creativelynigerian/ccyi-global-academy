export const navigationItems = [
  { 
    id: 'dashboard',
    label: 'Dashboard', 
    path: '/dashboard', 
    icon: 'LayoutDashboard' 
  },
  { 
    id: 'moodle',
    label: 'Moodle LMS', 
    path: '/moodle', 
    icon: 'GraduationCap',
    subItems: [
      { label: 'Dashboard', path: '/moodle' },
      { label: 'Training', path: '/moodle/guides' },
      { label: 'Videos', path: '/moodle/videos' },
      { label: 'Downloads', path: '/moodle/downloads' },
      { label: 'FAQ', path: '/moodle/faq' },
    ]
  },
  { 
    id: 'turnitin',
    label: 'Turnitin', 
    path: '/turnitin', 
    icon: 'CheckSquare' 
  },
  { 
    id: 'office365',
    label: 'Office 365', 
    path: '/office365', 
    icon: 'FileText' 
  },
  { 
    id: 'internet',
    label: 'Internet Login', 
    path: '/internet-login', 
    icon: 'Shield' 
  },
  { 
    id: 'grammarly',
    label: 'Grammarly', 
    path: '/grammarly', 
    icon: 'BookOpen' 
  },
  { 
    id: 'cuportal',
    label: 'CU Portal', 
    path: '/cu-portal', 
    icon: 'Users' 
  },
  { 
    id: 'resources',
    label: 'Resources', 
    path: '/resources', 
    icon: 'Download' 
  },
  { 
    id: 'support',
    label: 'Support', 
    path: '/support', 
    icon: 'HelpCircle' 
  },
];