"use client";
import React from "react";

import { cx } from "@/lib/utils";

import { Sidebar } from "@/components/ui/navigation/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      {/* @CHRIS: check whether <main> is used twice */}
      <main
        className={cx(
          isCollapsed ? "lg:pl-[60px]" : "lg:pl-64",
          "lg:bg-gray-50 lg:py-3 lg:pr-3 lg:dark:bg-gray-900 transition-width transition-slowest ease"
        )}
      >
        <div className="lg:rounded-lg lg:border lg:border-gray-200 bg-white dark:bg-gray-900 lg:dark:border-gray-800 p-4 sm:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
