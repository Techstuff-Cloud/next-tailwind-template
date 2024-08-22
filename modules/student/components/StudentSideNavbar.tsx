import Link from "next/link";
import React from "react";

const StudentSideNavbar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Omkala Infotech</h2>
      <ul>
        <li className="mb-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/student" className="hover:underline">
            Student
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#" className="hover:underline">
            About
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default StudentSideNavbar;
