import { StudentByIdProps } from "@/modules/student";
import React from "react";

const StudentByIdPage = ({ params }: StudentByIdProps) => {
  return <div>Student ID: {params.studentId}</div>;
};

StudentByIdPage.displayName = "StudentByIdPage";
export default StudentByIdPage;
