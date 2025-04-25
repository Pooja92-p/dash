// "use client";

// import React, { useState } from "react";
// // other imports

// const usersData = [
//     { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
//     { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
//     { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Active" },
//     // Add more users as needed
// ];

// function HomePage() {
//     const [searchTerm, setSearchTerm] = useState("");

//     const filteredUsers = usersData.filter((user) =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">User List</h1>
//             <input
//                 type="text"
//                 placeholder="Search by name..."
//                 className="mb-6 px-4 py-2 border border-gray-300 rounded w-full"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <div className="grid gap-4">
//                 {filteredUsers.map((user) => (
//                     <div
//                         key={user.id}
//                         className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
//                     >
//                         <h2 className="text-lg font-semibold">{user.name}</h2>
//                         <p className="text-gray-600">{user.email}</p>
//                         <span
//                             className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                                 }`}
//                         >
//                             {user.status}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default HomePage
