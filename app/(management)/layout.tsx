import React from "react";
import ManagementNavbar from "./navbar";

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-10">
      <div>ManagementLayout</div>
      <ManagementNavbar />

      <div className="mt-8">{children}</div>
    </section>
  );
}
