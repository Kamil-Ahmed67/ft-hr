import { IoMdAddCircleOutline } from "react-icons/io";
import { FaFileExcel } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa";
import EmployeeTable from "../components/EmployeeTable";
import Link from "next/link";
export default function Employee() {
  return (
    <div className="bg-slate-40">
      {/* TITLE.ADD EMPLOYEE*/}
      <div className="border-b-2">
        <div className="w-11/12 mx-auto flex justify-between items-center  py-4 ">
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mt-4 ">Employee List</h3>
          <Link href="/employee-entry">
            <button className="btn rounded-md bg-[#CAD0FE] hover:text-blue-800 mt-4 text-gray-800 transition ease-out duration-700 
           font-medium text-sm md:text-base lg:text-lg">
              <IoMdAddCircleOutline className="text-xl" />
              Add Employee</button>
          </Link>
        </div>
      </div>
      {/* EXCEL,CSV,SEARCH BAR */}
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          {/* Blank Section */}
          <div className="hidden lg:flex flex-grow"></div>
          {/* Button Section  */}
          <div className="flex justify-center items-center gap-2 lg:mr-52">
            <button className="flex items-center justify-center w-24 p-2 bg-[#2A954B] hover:bg-gray-300 hover:text-[#2A954B] transition ease-out duration-700 rounded-sm text-gray-50">
              <FaFileCsv className="mr-2" />
              CSV
            </button>
            <button className="flex items-center justify-center w-24 p-2 bg-[#2A954B] hover:bg-gray-300 hover:text-[#2A954B] transition ease-out duration-700 rounded-sm text-gray-50">
              <FaFileExcel className="mr-2" />
              Excel
            </button>
          </div>
          {/*Search Section*/}
          <div className="flex justify-end items-center gap-2">
            <h3 className="mr-2">Search:</h3>
            <label className="input rounded-md input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div className="mt-8 w-11/12 mx-auto mb-4">
        <EmployeeTable></EmployeeTable>
      </div>
    </div>
  )
}
