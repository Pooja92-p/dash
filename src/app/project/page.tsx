"use client";

import React from 'react'

type Project = {
    id: number;
    name: string;
    status: string;
    members: string[];
    stage: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Conference Room Booking App',
        status: 'In Progress',
        members: ['Alice', 'Charlie'],
        stage: 'Development',
    },
    {
        id: 2,
        name: 'Marketing Campaign Tracker',
        status: 'Completed',
        members: ['Eva', 'Frank'],
        stage: 'Deployment',
    },
    {
        id: 3,
        name: 'Testing Automation Suite',
        status: 'On Hold',
        members: ['Bob', 'David'],
        stage: 'Planning',
    },
]

export default function ProjectPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-black p-10 flex justify-center items-start"> {/* Center horizontally and align top */}
            <div className="overflow-x-auto max-w-4xl w-full mt-4"> {/* Adjust max width and margin top */}
                <table className="min-w-full border border-black rounded-lg shadow-lg bg-white">
                    <thead>
                        <tr className="bg-blue-200 text-left text-sm font-semibold uppercase tracking-wide">
                            <th className="px-6 py-4 border-r border-black">Project Name</th>
                            <th className="px-6 py-4 border-r border-black">Status</th>
                            <th className="px-6 py-4 border-r border-black">Team Members</th>
                            <th className="px-6 py-4">Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="border-t border-black hover:bg-blue-50 transition-colors">
                                <td className="px-6 py-4 border-r border-black font-medium">{project.name}</td>
                                <td className="px-6 py-4 border-r border-black text-sm">
                                    <span className={
                                        project.status === 'Completed'
                                            ? 'text-green-600'
                                            : project.status === 'On Hold'
                                                ? 'text-yellow-600'
                                                : 'text-blue-600'
                                    }>
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 border-r border-black text-sm">{project.members.join(', ')}</td>
                                <td className="px-6 py-4 text-sm">{project.stage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


