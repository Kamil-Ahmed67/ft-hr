'use client'
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";

function WeeklyEmployeeAttendanceChart() {
  return (
    <BarChart
      className="border-2 rounded-xl"
      xAxis={[
        {
          scaleType: "band",
          data: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
      ]}
      series={[
        {
          label: "Present",
          data: [45, 50, 48, 49, 47, 42, 40],
          style: { fill: "#4caf50" },
        },
        {
          label: "Absent",
          data: [5, 2, 4, 3, 6, 8, 10],
          style: { fill: "#f44336" },
        },
      ]}
      width={700}
      height={400}
    />
  );
}

function MonthlyEmployeeAttendanceChart() {
  return (
    <BarChart
      className="border-2 rounded-xl"
      xAxis={[
        {
          scaleType: "band",
          data: ["Week 1", "Week 2", "Week 3", "Week 4"],
        },
      ]}
      series={[
        {
          label: "Present",
          data: [200, 190, 210, 220],
          style: { fill: "#4caf50" },
        },
        {
          label: "Absent",
          data: [20, 30, 25, 15],
          style: { fill: "#f44336" },
        },
      ]}
      width={700}
      height={400}
    />
  );
}

function YearlyEmployeeAttendanceChart() {
  return (
    <BarChart
      className="border-2 rounded-xl"
      xAxis={[
        {
          scaleType: "band",
          data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        },
      ]}
      series={[
        {
          label: "Present",
          data: [900, 850, 870, 890, 910, 920, 880, 870, 890, 900, 920, 910],
          style: { fill: "#4caf50" },
        },
        {
          label: "Absent",
          data: [100, 150, 130, 110, 90, 80, 120, 130, 110, 100, 80, 90],
          style: { fill: "#f44336" },
        },
      ]}
      width={700}
      height={400}
    />
  );
}

export default function AttendanceDashboard() {
  const [view, setView] = useState("weekly");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="relative bg-white">
      <div
        className={`absolute z-10 bg-white ${
          isSidebarCollapsed ? "top-3 right-2" : "top-3 right-12"
        }`}
      >
        <select
          className="border rounded px-2 py-1"
          onChange={(e) => handleViewChange(e.target.value)}
          value={view}
        >
          <option value="weekly">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="mt-1">
        {view === "weekly" ? (
          <WeeklyEmployeeAttendanceChart />
        ) : view === "monthly" ? (
          <MonthlyEmployeeAttendanceChart />
        ) : (
          <YearlyEmployeeAttendanceChart />
        )}
      </div>
    </div>
  );
}
