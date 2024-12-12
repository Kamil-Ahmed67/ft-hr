import Link from "next/link";

export default function AttendanceCards() {
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Card-1 */}
            <Link href="/totalEmployee" className="relative hover:scale-105 transition ease-in-out duration-700 bg-white shadow-lg rounded-lg">
                <div>
                    {/* Badge */}
                    <div className="absolute w-24 md:w-28 lg:w-32 -top-4 left-4 bg-gradient-to-r from-[#FFA726] to-[#FB8C00] px-4 py-2 shadow-xl rounded-md">
                        <span className="text-xl md:text-2xl lg:text-3xl text-gray-50 font-bold text-center">1200</span>
                    </div>
                    {/* Card Content */}
                    <div className="p-6 mt-12">
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800">Total Employee</h2>
                        <div className="divider"></div>
                    </div>
                </div>
            </Link>

            {/* Card-2 */}
            <div className="relative hover:scale-105 transition ease-in-out duration-700  bg-white shadow-lg rounded-lg">
                {/* Badge */}
                <div className="absolute w-24 md:w-28 lg:w-32 -top-4 left-4 bg-gradient-to-r from-[#66BB6A] to-[#43A047] px-4 py-2 shadow-xl rounded-md">
                    <span className="text-xl md:text-2xl lg:text-3xl text-gray-50 font-bold text-center">1000</span>
                </div>
                {/* Card Content */}
                <div className="p-6 mt-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800">Present Today</h2>
                    <div className="divider"></div>
                </div>
            </div>

            {/* Card-3 */}
            <div className="relative hover:scale-105 transition ease-in-out duration-700  bg-white shadow-lg rounded-lg">
                {/* Badge */}
                <div className="absolute w-24 md:w-28 lg:w-32 -top-4 left-4 bg-gradient-to-r from-[#EF5350] to-[#E53935] px-4 py-2 shadow-xl rounded-md">
                    <span className="text-xl md:text-2xl lg:text-3xl text-gray-50 font-bold text-center">100</span>
                </div>
                {/* Card Content */}
                <div className="p-6 mt-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800">Absent Today</h2>
                    <div className="divider"></div>
                </div>
            </div>
        </div>
    );
}
