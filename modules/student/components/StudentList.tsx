"use client";

import React, { useTransition } from "react";
import { StudentListProps } from "../types";
import { useRouter } from "next/navigation";

const StudentList = (props: StudentListProps) => {
  const { students, nextCursor, previousCursor, currentOffset } = props;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleNextPage = () => {
    startTransition(() => {
      router.push(`/student/list?offset=${currentOffset + 20}`, {
        scroll: false,
      });
    });
  };

  const handlePreviousPage = () => {
    startTransition(() => {
      router.push(`/student/list?offset=${currentOffset - 20}`, {
        scroll: false,
      });
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className="mt-3">
        {students.map((student, index: number) => (
          <li key={student.name} className="text-gray-700">
            {`${index + 1}. ${student.name}`}
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={!previousCursor}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={handleNextPage}
          disabled={!nextCursor}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

StudentList.displayName = "StudentList";
export default StudentList;
