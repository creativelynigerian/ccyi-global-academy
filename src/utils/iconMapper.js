import {
  // Navigation Icons
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  CheckSquare,
  FileText,
  Shield,
  Users,
  Download,
  HelpCircle,
  Award,
  Brain,
  
  // Action Icons
  Plus,
  Upload,
  Download as DownloadIcon,
  Edit,
  Trash2,
  Save,
  X,
  Check,
  AlertCircle,
  AlertTriangle,
  
  // Feature Icons
  Mail,
  MessageSquare,
  Cloud,
  FolderOpen,
  File,
  Video,
  Headphones,
  Settings,
  User,
  UserPlus,
  UserCheck,
  LogOut,
  LogIn,
  
  // Course Icons
  Book,
  ClipboardList,
  Calendar,
  Clock,
  Star,
  Target,
  TrendingUp,
  
  // Status Icons
  CheckCircle,
  XCircle,
  Info,
  Warning,
  
  // Platform Icons
  Globe,
  Wifi,
  PenTool,
  Building,
  Award as Certificate,
  Library
} from 'lucide-react';

// Icon mapping for different categories
export const iconMap = {
  // Navigation
  dashboard: LayoutDashboard,
  moodle: GraduationCap,
  turnitin: CheckSquare,
  office365: FileText,
  internet: Shield,
  grammarly: PenTool,
  cuportal: Building,
  certificate: Award,
  resources: Library,
  support: HelpCircle,
  aicourse: Brain,
  
  // Actions
  add: Plus,
  upload: Upload,
  download: DownloadIcon,
  edit: Edit,
  delete: Trash2,
  save: Save,
  close: X,
  check: Check,
  
  // Status
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
  
  // Features
  email: Mail,
  chat: MessageSquare,
  cloud: Cloud,
  folder: FolderOpen,
  file: File,
  video: Video,
  audio: Headphones,
  settings: Settings,
  user: User,
  users: Users,
  logout: LogOut,
  login: LogIn,
  
  // Course
  book: Book,
  list: ClipboardList,
  calendar: Calendar,
  clock: Clock,
  star: Star,
  target: Target,
  trending: TrendingUp,
  
  // Platform
  globe: Globe,
  wifi: Wifi,
  pen: PenTool,
  building: Building,
  certificate: Certificate,
  library: Library
};

// Helper function to get icon by name
export const getIcon = (name, size = 20, color = 'currentColor') => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} />;
};

export default iconMap;