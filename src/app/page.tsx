"use client";

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing sun and moon icons

function UserManagementPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", team: "Software Developer", project: "Project X" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive", team: "Software Testing", project: "Project Y" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Active", team: "Digital Marketing", project: "Project Z" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Active");
  const [team, setTeam] = useState("");
  const [project, setProject] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  type User = {
    id: number;
    name: string;
    email: string;
    status: string;
    team: string;
    project: string;
  };

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      id: editId || Date.now(),
      name,
      email,
      status,
      team,
      project,
    };

    if (editId) {
      // Update the user if editing
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === editId ? newUser : user))
      );
    } else {
      // Add new user if not editing
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }

    resetForm();
  };

  const handleEditUser = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setStatus(user.status);
    setTeam(user.team);
    setProject(user.project);
    setEditId(user.id); // Set editId to the user being edited
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setStatus("Active");
    setTeam("");
    setProject("");
    setEditId(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 to-purple-100"} min-h-screen flex flex-col items-center`}>
      {/* Toggle Dark Mode */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>

      {/* Create User Section */}
      <div className="w-full flex justify-center mt-16 mb-8">
        <form
          onSubmit={handleCreateUser}
          className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-white">
            {editId ? "Edit User" : "Create New User"}
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Team</label>
            <input
              type="text"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Project Handling Name</label>
            <input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {editId ? "Update User" : "Create User"}
          </button>
        </form>
      </div>

      {/* User Table Section */}
      <div className="w-full max-w-6xl mt-10 px-6 flex justify-center">
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-800 dark:text-white">User List</h2>
            <input
              type="text"
              placeholder="Search by name..."
              className="px-4 py-2 border border-gray-300 rounded w-64 text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-white">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-white">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-white">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-white">Team</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-white">Project</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">{user.name}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.email}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                          }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.team}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.project}</td>
                    <td className="px-6 py-4 text-gray-600 space-x-2">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:underline dark:text-red-400"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500 dark:text-gray-400">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagementPage;
