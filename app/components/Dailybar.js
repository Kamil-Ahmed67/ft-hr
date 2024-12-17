'use client'
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";

function WeeklyEmployeeAttendanceChart() {
  return (
    <BarChart
      className="border-2 font-roboto rounded-lg bg-white border-white"
      xAxis={[
        {
          scaleType: "band",
          data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
          spacing: 10,
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
      height={350}
    />
  );
}

function MonthlyEmployeeAttendanceChart() {
  return (
    <BarChart
      className="border-2 font-roboto rounded-lg bg-white border-white"
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
      height={350}
    />
  );
}

function YearlyEmployeeAttendanceChart() {
  return (
    <BarChart
      className="border-2 font-roboto shadow-md rounded-lg bg-white border-white"
      xAxis={[
        {
          scaleType: "band",
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
      height={350}
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
    <div className="relative font-roboto">
      <div
        className={`absolute z-10 bg-white ${isSidebarCollapsed ? "top-3 right-2" : "top-3 right-14"}`}
      >
        <select
          className="border rounded px-1 lg:px-2 py-1"
          onChange={(e) => handleViewChange(e.target.value)}
          value={view}
        >
          <option className=" text-xs lg:text-base" value="weekly">Daily</option>
          <option className=" text-xs lg:text-base" value="monthly">Monthly</option>
          <option className=" text-xs lg:text-base" value="yearly">Yearly</option>
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
