import {
  Album,
  BookOpenText,
  BookUser,
  Bus,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
  SquareDivide,
  User,
  Users,
} from 'lucide-react';

export const iconsMapping = {
  'layout-dashboard': LayoutDashboard,
  users: Users,
  user: User,
  'shield-check': ShieldCheck,
  bus: Bus,
  album: Album,
  'book-user': BookUser,
  'book-open-text': BookOpenText,
  'square-divide': SquareDivide,
  settings: Settings,
  'log-out': LogOut,
};

export const sidebarOptions = [
  {
    id: '01',
    label: 'Dashboard',
    iconName: 'layout-dashboard',
    href: '/',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '02',
    label: 'Front Office',
    iconName: 'users',
    href: '/front-office',
    hasSubOptions: true,
    subOptions: [
      {
        id: '02.01',
        label: 'Admission Enquiry',
        iconName: '',
        href: '/front-office/admission-enquiry',
      },
      {
        id: '02.02',
        label: 'Visitor Book',
        iconName: '',
        href: '/front-office/visitor-book',
      },
      {
        id: '02.03',
        label: 'Feedback',
        iconName: '',
        href: '/front-office/feedback',
      },
    ],
  },
  {
    id: '03',
    label: 'Student Management',
    iconName: 'user',
    href: '/student-management',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '04',
    label: 'Enrollment',
    iconName: 'square-divide',
    href: '/enrollment',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '05',
    label: 'HR',
    iconName: 'book-user',
    href: '/hr',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '06',
    label: 'Examination',
    iconName: 'book-open-text',
    href: '/examination',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '07',
    label: 'Library',
    iconName: 'book-user',
    href: '/library',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '08',
    label: 'Transport',
    iconName: 'bus',
    href: '/transport',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '09',
    label: 'Card & Certificate',
    iconName: 'shield-check',
    href: '/card-and-certificate',
    hasSubOptions: false,
    subOptions: [],
  },
  {
    id: '10',
    label: 'Scholarship Management',
    iconName: 'album',
    href: '/scholarship-management',
    hasSubOptions: false,
    subOptions: [],
  },
];
