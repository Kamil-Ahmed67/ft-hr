import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const tableData =[{
    "id": 1,
    "name": "Orel",
    "email": "opeterffy0@boston.com",
    "mobile": "790-724-8408",
    "gender": "Female",
    "status": false,
    "dob": "7/5/2024",
    "salary": 43940,
    "designation": "Operator",
    "department": "Business Development"
  }, {
    "id": 2,
    "name": "Megan",
    "email": "mkamiyama1@163.com",
    "mobile": "508-941-2268",
    "gender": "Female",
    "status": false,
    "dob": "8/31/2024",
    "salary": 7998,
    "designation": "Pharmacist",
    "department": "Legal"
  }, {
    "id": 3,
    "name": "Cathrine",
    "email": "cglasper2@shinystat.com",
    "mobile": "920-200-5620",
    "gender": "Female",
    "status": true,
    "dob": "9/11/2024",
    "salary": 29243,
    "designation": "Administrative Assistant IV",
    "department": "Business Development"
  }, {
    "id": 4,
    "name": "Starla",
    "email": "sfettiplace3@photobucket.com",
    "mobile": "320-353-9873",
    "gender": "Female",
    "status": false,
    "dob": "8/19/2024",
    "salary": 36193,
    "designation": "Senior Sales Associate",
    "department": "Marketing"
  }, {
    "id": 5,
    "name": "Raffaello",
    "email": "rzanneli4@smh.com.au",
    "mobile": "739-485-2481",
    "gender": "Male",
    "status": false,
    "dob": "10/29/2024",
    "salary": 15181,
    "designation": "Librarian",
    "department": "Human Resources"
  }, {
    "id": 6,
    "name": "Pierce",
    "email": "pboig5@foxnews.com",
    "mobile": "267-729-8084",
    "gender": "Male",
    "status": false,
    "dob": "12/22/2023",
    "salary": 2418,
    "designation": "Senior Financial Analyst",
    "department": "Engineering"
  }, {
    "id": 7,
    "name": "Sonnie",
    "email": "splayle6@uol.com.br",
    "mobile": "163-892-3554",
    "gender": "Bigender",
    "status": true,
    "dob": "8/30/2024",
    "salary": 47710,
    "designation": "Electrical Engineer",
    "department": "Support"
  }, {
    "id": 8,
    "name": "Clerc",
    "email": "cpickburn7@ucsd.edu",
    "mobile": "939-575-0863",
    "gender": "Male",
    "status": false,
    "dob": "9/11/2024",
    "salary": 10630,
    "designation": "Dental Hygienist",
    "department": "Engineering"
  }, {
    "id": 9,
    "name": "Kirby",
    "email": "kmarde8@theatlantic.com",
    "mobile": "455-125-5225",
    "gender": "Male",
    "status": true,
    "dob": "6/15/2024",
    "salary": 36242,
    "designation": "Media Manager I",
    "department": "Marketing"
  }, {
    "id": 10,
    "name": "Fielding",
    "email": "fpollak9@dyndns.org",
    "mobile": "259-775-1204",
    "gender": "Male",
    "status": false,
    "dob": "11/20/2024",
    "salary": 33480,
    "designation": "Paralegal",
    "department": "Human Resources"
  }];
export default function EmployeeTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440, overflow: 'auto' }}>
      <Table aria-label="simple-table">
        <TableHead>
          <TableRow className='bg-[#CAD0FE] font-bold' sx={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
            <TableCell>SI</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date Of Birth</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => {
            return (
              <TableRow key={row.id} sx={{ '&:last-child td,&:last-child th': { border: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.status ? 'Active' : 'Inactive'}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell>{row.department}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
