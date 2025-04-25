"use client";

import { useState } from 'react'

type TeamMember = {
    name: string;
    status: string;
}

type Team = {
    id: number;
    name: string;
    initial: string;
    current: boolean;
    members: TeamMember[];
}

const teams: Team[] = [
    {
        id: 1,
        name: 'Software Developer Team',
        initial: 'S',
        current: false,
        members: [
            { name: 'Alice', status: 'Active' },
            { name: 'Bob', status: 'Inactive' },
        ]
    },
    {
        id: 2,
        name: 'Software Testing Team',
        initial: 'T',
        current: false,
        members: [
            { name: 'Charlie', status: 'Active' },
            { name: 'David', status: 'Inactive' },
        ]
    },
    {
        id: 3,
        name: 'Digital Marketing Team',
        initial: 'D',
        current: false,
        members: [
            { name: 'Eva', status: 'Active' },
            { name: 'Frank', status: 'Active' },
        ]
    },
]

export default function TeamsPage() {
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)

    const bgColors = ["bg-rose-100", "bg-emerald-100", "bg-indigo-100"]
    const hoverColors = ["hover:bg-rose-200", "hover:bg-emerald-200", "hover:bg-indigo-200"]

    return (
        <div className="flex min-h-screen bg-gray-50 text-black">
            {/* Left Side - Team Cards */}
            <div className="flex flex-col items-end p-6 w-full lg:w-2/3 xl:w-1/2 ml-auto gap-y-10">
                <h2 className="text-3xl font-bold mb-6 self-end">Teams</h2>

                {teams.map((team, index) => (
                    <div
                        key={team.id}
                        className={`cursor-pointer w-full max-w-md rounded-lg border border-black p-5 shadow text-black transition-all duration-200 ${bgColors[index % bgColors.length]} ${hoverColors[index % hoverColors.length]}`}
                        onClick={() => setSelectedTeam(team)}
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-xl font-bold">
                            {team.initial}
                        </div>
                        <h3 className="text-lg font-semibold mt-4">{team.name}</h3>
                    </div>
                ))}
            </div>

            {/* Right Side - Team Details */}
            {selectedTeam && (
                <div className="w-full lg:w-1/3 xl:w-1/4 p-8 bg-white rounded-lg shadow-lg lg:absolute lg:right-0 lg:top-0 lg:h-full text-black">
                    <h3 className="text-3xl font-bold mb-6">{selectedTeam.name}</h3>
                    <ul className="space-y-4">
                        {selectedTeam.members.map((member, idx) => (
                            <li key={idx} className="flex justify-between text-lg font-medium">
                                <span>{member.name}</span>
                                <span className={member.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                                    {member.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setSelectedTeam(null)}
                        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    )
}









