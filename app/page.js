import dynamic from "next/dynamic";
import NoticeBoard from "./components/NoticeBoard";
const AttendanceCards = dynamic(() => import("./components/AttendanceCards"));
const LeaveApplication = dynamic(() => import("./components/LeaveApplication"));
const BasicBars = dynamic(() => import("./components/Dailybar"));
const MonthlyCasualAbsent = dynamic(() => import("./components/MonthlyCasualAbsent"));
const MonthlySickAbsent = dynamic(() => import("./components/MonthlySickAbsent"));
const MonthlyLateAttendance = dynamic(() => import("./components/MonthlyLateAttendance"));
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-11/12 mx-auto mt-16">
        <AttendanceCards></AttendanceCards>
      </div>
      <div className="w-11/12 flex flex-col lg:flex-row gap-5 mx-auto mt-5">
        <div className="w-3/5">
          <div><BasicBars></BasicBars></div>
          <div className="flex mt-4 border-2 p-2 space-x-4 border-gray-200 shadow-transparent rounded-lg">
            <MonthlyCasualAbsent></MonthlyCasualAbsent>
            <MonthlySickAbsent></MonthlySickAbsent>
            <MonthlyLateAttendance></MonthlyLateAttendance>
          </div>
        </div>
        <div className="w-3/5">
          <LeaveApplication></LeaveApplication>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-5">
        <div>
          <NoticeBoard></NoticeBoard>
        </div>
      </div>
    </main>
  );
}
