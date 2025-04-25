"use client";

import { Menu, Bell, UserCircle } from "lucide-react";
function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-gray-950 text-white border-b border-gray-800 flex items-center justify-between px-6 z-40 ">
      {/* Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Page Title */}
      <h1 className="text-center text-xl font-semibold">Employee Dashboard</h1>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-white">
          <UserCircle className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}

export default Header
