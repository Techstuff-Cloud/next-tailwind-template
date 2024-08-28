export interface SidebarOption {
  id: string;
  label: string;
  iconName: string;
  href: string;
  hasSubOptions: boolean;
  subOptions: SidebarOption[];
}
