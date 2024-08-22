"use client";
import * as React from "react";
import AdminLayout from "@/components/AdminLayout";

export default function ADminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
