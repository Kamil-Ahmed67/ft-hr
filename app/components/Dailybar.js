import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function WeeklyEmployeeAttendanceChart() {
  return (
    <BarChart className="border-2 rounded-xl"
      xAxis={[
        {
          scaleType: "band",
          data: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        },
      ]}
      series={[
        {
          label: "Present",
          data: [45, 50, 48, 49, 47, 42, 40], // Sample data for present employees
          style: { fill: "#4caf50" }, // Green color for Present
        },
        {
          label: "Absent",
          data: [5, 2, 4, 3, 6, 8, 10], // Sample data for absent employees
          style: { fill: "#f44336" }, // Red color for Absent
        },
      ]}
      width={700}
      height={400}
    />
  );
}
