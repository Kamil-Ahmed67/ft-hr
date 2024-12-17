import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
const platforms = [
  { label: 'Present', value: 65 }, 
  { label: 'Monthly Sick Absent', value: 35 },
];
const valueFormatter = (value) => `${value}%`;
export default function MonthlySickAbsent() {
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
      <Typography className='text-gray-600 font-roboto  text-xs lg:text-sm'>Monthly Sick Absent</Typography>
    </Box>
  );
}
