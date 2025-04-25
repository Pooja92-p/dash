"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Employee Dashboard",
  description: "Manage employee data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top Navbar */}


        {/* Layout wrapper */}
        <div className="flex pt-16"> {/* pt-16 so content is below navbar */}
          {/* Sidebar */}
          <Sidebar />
          {/* Main content */}
          <main
            className={`flex-1 bg-gray-950 text-white p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"
              }`}
          >
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
