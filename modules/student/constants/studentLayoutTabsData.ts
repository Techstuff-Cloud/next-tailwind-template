import { Tab } from '@/components/UI/Tabs';
import { StudentLayoutTabItem } from '../types';

export const studentLayoutTabsData: Tab<StudentLayoutTabItem>[] = [
  {
    label: 'View List',
    content: 'This is the content for Tab 1.',
    href: '/student/list',
  },
  {
    label: 'Create Student',
    content: 'This is the content for Tab 2.',
    href: '/student/create',
  },
];
