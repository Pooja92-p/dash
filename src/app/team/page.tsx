"use client";

import { useState } from 'react';

type TeamMember = {
    name: string;
    status: string;
};

type Team = {
    id: number;
    name: string;
    initial: string;
    current: boolean;
    members: TeamMember[];
};

const initialTeams: Team[] = [
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
];

export default function TeamsPage() {
    const [teams, setTeams] = useState<Team[]>(initialTeams);
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
    const [newTeamName, setNewTeamName] = useState('');
    const [newMemberName, setNewMemberName] = useState('');
    const [newMemberStatus, setNewMemberStatus] = useState('Active');
    const [editingTeam, setEditingTeam] = useState<Team | null>(null);

    const bgColors = ["bg-rose-100", "bg-emerald-100", "bg-indigo-100"];
    const hoverColors = ["hover:bg-rose-200", "hover:bg-emerald-200", "hover:bg-indigo-200"];

    // Create a new team
    const createTeam = () => {
        const newTeam: Team = {
            id: Date.now(),
            name: newTeamName,
            initial: newTeamName[0].toUpperCase(),
            current: false,
            members: []
        };
        setTeams([...teams, newTeam]);
        setNewTeamName('');
    };

    // Add a new member to a selected team
    const addMember = () => {
        if (selectedTeam && newMemberName) {
            const updatedTeam = { ...selectedTeam };
            updatedTeam.members.push({ name: newMemberName, status: newMemberStatus });
            setTeams(teams.map(team => team.id === selectedTeam.id ? updatedTeam : team));
            setNewMemberName('');
            setNewMemberStatus('Active');
        }
    };

    // Edit team details
    const editTeam = () => {
        if (editingTeam) {
            const updatedTeams = teams.map(team =>
                team.id === editingTeam.id ? editingTeam : team
            );
            setTeams(updatedTeams);
            setEditingTeam(null);
        }
    };

    // Delete a team
    const deleteTeam = (id: number) => {
        setTeams(teams.filter(team => team.id !== id));
        setSelectedTeam(null);
    };

    return (
        <div className="flex min-h-screen bg-gray-50 text-black">
            {/* Left Side - Team Cards */}
            <div className="flex flex-col items-end p-6 w-full lg:w-2/3 xl:w-1/2 ml-auto gap-y-10">
                <h2 className="text-3xl font-bold mb-6 self-end">Teams</h2>

                <div className="flex flex-col gap-y-4 mb-8">
                    <input
                        type="text"
                        placeholder="Enter new team name"
                        className="p-2 rounded-lg border border-gray-300"
                        value={newTeamName}
                        onChange={(e) => setNewTeamName(e.target.value)}
                    />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={createTeam}
                    >
                        Create Team
                    </button>
                </div>

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

                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-4">Add New Member</h4>
                        <input
                            type="text"
                            placeholder="Member name"
                            className="p-2 rounded-lg border border-gray-300 mb-2 w-full"
                            value={newMemberName}
                            onChange={(e) => setNewMemberName(e.target.value)}
                        />
                        <select
                            className="p-2 rounded-lg border border-gray-300 mb-4 w-full"
                            value={newMemberStatus}
                            onChange={(e) => setNewMemberStatus(e.target.value)}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <button
                            onClick={addMember}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg w-full"
                        >
                            Add Member
                        </button>
                    </div>

                    <ul className="space-y-4 mb-6">
                        {selectedTeam.members.map((member, idx) => (
                            <li key={idx} className="flex justify-between text-lg font-medium">
                                <span>{member.name}</span>
                                <span className={member.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                                    {member.status}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Edit and Delete Buttons */}
                    <button
                        onClick={() => deleteTeam(selectedTeam.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2 w-full"
                    >
                        Delete Team
                    </button>
                </div>
            )}
        </div>
    );
}

