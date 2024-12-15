import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

// Example data for "Present" and "Monthly Casual Absent"
const platforms = [
  { label: 'Present', value: 70 }, // 70% for Present
  { label: 'Monthly Casual Absent', value: 30 }, // 30% for Absent
];

// Formatter function for percentage
const valueFormatter = (value) => `${value}%`;

export default function MonthlyCasualAbsent() {
  // Prepare the data with formatted labels
  const formattedData = platforms.map(item => ({
    ...item,
    arcLabel: `${item.label}: ${valueFormatter(item.value)}`,
  }));

  const pieParams = {
    height: 200,
    margin: { right: 5 },
    slotProps: { legend: { hidden: true } },
  };

  return (
    <Box width="100%" textAlign="center">
      <PieChart
        series={[{ data: formattedData }]} 
        {...pieParams}
      />
      <Typography className='text-gray-600 text-sm'>Monthly Casual Absent</Typography>
    </Box>
  );
}
