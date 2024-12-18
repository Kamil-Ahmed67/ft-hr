import dynamic from "next/dynamic";
const EmployeeTable = dynamic(() => import("../components/EmployeeTable"));
export default function Employee() {
  return (
    <div className="bg-[#ECF0F4] min-h-screen">
      {/* TITLE.ADD EMPLOYEE*/}
      <div className="border-b-2 border-gray-300">
        <div className="w-[96%] mx-auto flex justify-between items-center  py-2 ">
          <div>
            <h3 className="text-base md:text-lg lg:text-xl text-gray-700 font-medium  ">Employee List</h3>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div className="mt-4 w-[96%] mx-auto bg-[#ECF0F4] mb-8">
        <EmployeeTable></EmployeeTable>
      </div>
    </div>
  )
}
