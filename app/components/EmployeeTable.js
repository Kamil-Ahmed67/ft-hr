'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import { FaEye, FaEdit, FaFileExcel, FaRedo } from 'react-icons/fa';
import { FaRegTrashAlt } from "react-icons/fa";
import Box from '@mui/material/Box';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import { IoMdAddCircleOutline } from 'react-icons/io';
const tableData = [
  {
    id: 1,
    name: "Orel",
    email: "opeterffy0@boston.com",
    mobile: "7907248408",
    gender: "Female",
    status: false,
    dob: "7/5/2024",
    salary: 43940,
    designation: "Operator",
    department: "Business Development",
  },
  {
    id: 2,
    name: "Megan",
    email: "mkamiyama1@163.com",
    mobile: "5089412268",
    gender: "Female",
    status: false,
    dob: "8/31/2024",
    salary: 7998,
    designation: "Pharmacist",
    department: "Legal",
  },
  {
    id: 3,
    name: "Cathrine",
    email: "cglasper2@shinystat.com",
    mobile: "9202005620",
    gender: "Female",
    status: true,
    dob: "9/11/2024",
    salary: 29243,
    designation: "Administrative Assistant IV",
    department: "Business Development",
  },
  {
    id: 4,
    name: "Starla",
    email: "sfettiplace3@photobucket.com",
    mobile: "3203539873",
    gender: "Female",
    status: false,
    dob: "8/19/2024",
    salary: 36193,
    designation: "Senior Sales Associate",
    department: "Marketing",
  },
  {
    id: 5,
    name: "Raffaello",
    email: "rzanneli4@smh.com.au",
    mobile: "7394852481",
    gender: "Male",
    status: false,
    dob: "10/29/2024",
    salary: 15181,
    designation: "Librarian",
    department: "Human Resources",
  },
  {
    id: 6,
    name: "Pierce",
    email: "pboig5@foxnews.com",
    mobile: "2677298084",
    gender: "Male",
    status: false,
    dob: "12/22/2023",
    salary: 2418,
    designation: "Senior Financial Analyst",
    department: "Engineering",
  },
  {
    id: 7,
    name: "Sonnie",
    email: "splayle6@uol.com.br",
    mobile: "1638923554",
    gender: "Bigender",
    status: true,
    dob: "8/30/2024",
    salary: 47710,
    designation: "Electrical Engineer",
    department: "Support",
  },
  {
    id: 8,
    name: "Clerc",
    email: "cpickburn7@ucsd.edu",
    mobile: "9395750863",
    gender: "Male",
    status: false,
    dob: "9/11/2024",
    salary: 10630,
    designation: "Dental Hygienist",
    department: "Engineering",
  },
  {
    id: 9,
    name: "Kirby",
    email: "kmarde8@theatlantic.com",
    mobile: "4551255225",
    gender: "Male",
    status: true,
    dob: "6/15/2024",
    salary: 36242,
    designation: "Media Manager I",
    department: "Marketing",
  },
  {
    id: 10,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
  {
    id: 11,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
  {
    id: 12,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
  {
    id: 13,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
  {
    id: 14,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
  {
    id: 15,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
  {
    id: 16,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
  {
    id: 17,
    name: "Fielding",
    email: "fpollak9@dyndns.org",
    mobile: "2597751204",
    gender: "Male",
    status: false,
    dob: "11/20/2024",
    salary: 33480,
    designation: "Paralegal",
    department: "Human Resources",
  },
];

export default function EmployeeTable() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredData = tableData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.mobile.includes(searchTerm)
  );
  return (
    <div className='mb-6'>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 500,
          overflow: 'auto',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          '&::-webkit-scrollbar': {
            display: 'none', // Hiding scrollbar in Webkit browsers
          },
          scrollbarWidth: 'none', // Hiding scrollbar in Firefox
        }}
      >
        <Box sx={{ padding: 2, display: 'flex', backgroundColor: "#DAE1F3", justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='flex items-center gap-2'>
            <h3 className='text-base font-semibold text-gray-700'>Employees</h3>
            <TextField
              className='bg-white rounded-md'
              label="Search"
              size="small"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              sx={{ width: '200px' }}
            />
          </div>
          <div className='flex justify-between items-center gap-4'>
            <Link href="/employee-entry" className="tooltip z-10 tooltip-bottom" data-tip="Add New Employee">
              <IoMdAddCircleOutline className="text-2xl text-blue-800" />
            </Link>
            <div className="tooltip z-10 tooltip-bottom" data-tip="Refresh Table" >
              <FaRedo className="text-lg text-gray-700 cursor-pointer" />
            </div>
            <div className="tooltip z-50 tooltip-bottom" data-tip="Download">
              <FaFileExcel className="text-xl text-[#2A954B] cursor-pointer" />
            </div>
          </div>
        </Box>

        <Table aria-label="employee-table">
          <TableHead>
            <TableRow
              sx={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                backgroundColor: "#FFFFFF",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>SI</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Name</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Email</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Mobile</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Status</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Salary</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Designation</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Department</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: '#ffffff',
                  "&:hover": { backgroundColor: '#f0f0f0' },
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.name}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.email}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.mobile}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.status ? "Active" : "Inactive"}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.salary}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.designation}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{row.department}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <Link href={`/employee/${row.id}`} passHref>
                      <IconButton
                        color="primary"
                        sx={{ padding: 0.5, fontSize: '1rem' }}
                      >
                        <FaEye />
                      </IconButton>
                    </Link>
                    <IconButton
                      color="success"
                      onClick={() => console.log("Edit", row.id)}
                      sx={{ padding: 0.5, fontSize: '1rem' }}
                    >
                      <FaEdit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => console.log("Delete", row.id)}
                      sx={{ padding: 0.5, fontSize: '1rem' }}
                    >
                      <FaRegTrashAlt />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}