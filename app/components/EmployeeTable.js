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
import { FaEye, FaEdit, FaPrint, FaTrash } from 'react-icons/fa';
import Box from '@mui/material/Box';

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
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 500,
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none', // Hide scrollbar in Webkit browsers
        },
        scrollbarWidth: 'none', // Hide scrollbar in Firefox
      }}
    >
      <Table aria-label="employee-table">
        <TableHead>
          <TableRow
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: "#CAD0FE",
              fontWeight: "bold",
            }}
          >
            <TableCell sx={{ textAlign: 'center' }}>SI</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Name</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Email</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Mobile</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Status</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Salary</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Designation</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Department</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row,index) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor: index % 2 === 0 ? '#f4f4f9' : '#ffffff', // Alternating row colors
                "&:last-child td, &:last-child th": { border: 0 }
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
                    gap: 1, // Add spacing between buttons
                    justifyContent: 'center', // Center buttons horizontally
                  }}
                >
                  <IconButton
                    color="primary"
                    onClick={() => console.log("View", row.id)}
                  >
                    <FaEye />
                  </IconButton>
                  <IconButton
                    color="success"
                    onClick={() => console.log("Edit", row.id)}
                  >
                    <FaEdit />
                  </IconButton>
                  <IconButton
                    color="info"
                    onClick={() => console.log("Print", row.id)}
                  >
                    <FaPrint />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => console.log("Delete", row.id)}
                  >
                    <FaTrash />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}