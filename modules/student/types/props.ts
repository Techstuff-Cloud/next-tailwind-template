import { Student } from "./student";

export interface StudentListProps {
  students: Student[];
  nextCursor: string;
  previousCursor: string;
  currentOffset: number;
}

export interface StudentLayoutProps {
  children: React.ReactNode;
}
