import Link from 'next/link';
import React from 'react';
import { FaList } from 'react-icons/fa';

export default function EmployeeEntry() {
    return (
        <div>
            {/* TITLE: ADD EMPLOYEE */}
            <div className="border-b-2 sticky top-0 bg-white/30 backdrop-blur-xl z-10 shadow-md">
                <div className="w-11/12 mx-auto flex justify-between items-center mt-4 py-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">Add Employee</h3>
                    <Link href="/employee">
                        <button className="flex items-center space-x-2 rounded-md bg-[#CAD0FE] hover:text-blue-800 text-gray-800 transition ease-out duration-700 font-medium text-sm md:text-base lg:text-lg px-4 py-2">
                            <FaList className="text-xl" />
                            <span>Employee List</span>
                        </button>
                    </Link>
                </div>
                <div className="flex space-x-4 justify-center mb-4">
                    <button className="bg-blue-500 hover:bg-gray-300 hover:text-blue-600 transition ease-out duration-700 text-white px-4 py-2 rounded-md">
                        Add Profile
                    </button>
                    <button className="bg-gray-400 text-white hover:bg-gray-300 hover:text-blue-600 transition ease-out duration-700 px-4 py-2 rounded-md">
                        Reset All
                    </button>
                </div>
            </div>
            {/* FORM SECTIONS */}
            <div className="bg-gray-50 p-6 min-h-screen">
                <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">

                    {/* BASIC INFORMATION SECTION */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name *</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Date of Joining *</label>
                                <input
                                    type="date"
                                    className="w-full border rounded-md p-2"
                                    placeholder="DD-MM-YYYY"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Department *</label>
                                <select className="w-full border rounded-md p-2">
                                    <option>Select Department</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email *</label>
                                <input
                                    type="email"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Designation *</label>
                                <select className="w-full border rounded-md p-2">
                                    <option>Select Designation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Salary (Monthly) *</label>
                                <input
                                    type="number"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Salary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Date of Birth *</label>
                                <input
                                    type='date'
                                    className="w-full border rounded-md p-2"
                                    placeholder="DD-MM-YYYY"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Blood Group *</label>
                                <select className="w-full border rounded-md p-2">
                                    <option>Select Blood Group</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Gender *</label>
                                <select className="w-full border rounded-md p-2">
                                    <option>Select Gender</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Device ID *</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Search Employee"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Status *</label>
                                <select className="w-full border rounded-md p-2">
                                    <option>Present</option>
                                    <option>Absent</option>
                                    <option>Leave</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* PERSONAL INFORMATION SECTION */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Present Address *</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Permanent Address</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Photo *</label>
                                <input
                                    type="file"
                                    className="w-full border rounded-md p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Nationality</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Nationality"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Religion</label>
                                <select className="w-full border rounded-md p-2">
                                    <option>Select Religion</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Marital Status</label>
                                <select className="w-full border rounded-md p-2">
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">NID Number</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter NID Number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Father Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Father's Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Mother Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Mother's Name"
                                />
                            </div>
                        </div>
                    </div>
                    {/* ADDITIONAL INFORMATION SECTION */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Additional Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">PBX Number</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter PBX Number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Mobile No. (Office)</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Mobile No."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Passport No. (If Any)</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Enter Passport No."
                                />
                            </div>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex space-x-4 justify-end">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Add Profile
                        </button>
                        <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
                            Reset All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
