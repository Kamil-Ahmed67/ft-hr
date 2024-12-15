import React from 'react';

export default function LeaveApplication() {
    return (
        <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md max-h-[612px] overflow-auto px-4 custom-scroll">
            <div className="sticky top-0 bg-white z-10">
                <h2 className="text-xl flex justify-start font-bold text-gray-700 p-4 mb-4">Leave Applications</h2>
            </div>
            <div className="mb-4">
                <div className="space-y-4">
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="flex cursor-pointer items-center justify-between bg-blue-100 p-4 rounded-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-red-200 rounded-full"></div>
                                <div>
                                    <p className="text-gray-800 font-semibold">
                                        Maisha Lucy Zamora Gonzales
                                    </p>
                                    <p className="text-gray-600 text-sm">Reason:</p>
                                </div>
                            </div>
                            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-lg">
                                Approved
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    .custom-scroll::-webkit-scrollbar {
                        display: none;
                    }
                    .custom-scroll {
                        -ms-overflow-style: none;  /* For Internet Explorer 10+ */
                        scrollbar-width: none;  /* For Firefox */
                    }
                `}
            </style>
        </div>
    );
}
