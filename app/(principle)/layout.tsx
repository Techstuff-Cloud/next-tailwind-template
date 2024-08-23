import React from "react";
import PrincipleNavbar from "./navbar";

export default function PrincipleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-10">
      <div>PrincipleLayout</div>
      <PrincipleNavbar />

      <div className="mt-8">{children}</div>
    </section>
  );
}
