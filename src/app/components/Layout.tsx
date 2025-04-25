// "use client";

// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./common/NavBar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Employee Dashboard",
//   description: "Manage your employee data and reports",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-gray-950 text-white`}>
//         <Sidebar isOpen={isSidebarOpen} />
//         <div className={`ml-${isSidebarOpen ? "64" : "20"} transition-all duration-300`}>
//           <Navbar toggleSidebar={toggleSidebar} />
//           <main className="p-6 pt-20 min-h-screen">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }
