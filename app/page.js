import dynamic from "next/dynamic";
const AttendanceCards = dynamic(() => import("./components/AttendanceCards"));
const LeaveApplication = dynamic(() => import("./components/LeaveApplication"));
const BasicBars = dynamic(() => import("./components/Dailybar"));
const MonthlyCasualAbsent = dynamic(() => import("./components/MonthlyCasualAbsent"));
const MonthlySickAbsent = dynamic(() => import("./components/MonthlySickAbsent"));
const MonthlyLateAttendance = dynamic(() => import("./components/MonthlyLateAttendance"));
const NoticeBoard = dynamic(() => import("./components/NoticeBoard"));
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-[#ECF0F4] ">
      <div className="w-[96%] mx-auto mt-10  px-3 lg:px-0">
        <AttendanceCards></AttendanceCards>
      </div>
      <div className="w-[96%] flex flex-col lg:flex-row gap-5 mx-auto">
        <div className="w-full lg:w-3/5 p-2 lg:p-0">
          <div className="rounded-lg shadow-sm"><BasicBars></BasicBars></div>
          <div className="flex mt-4 border-2 p-2 space-x-4 bg-white shadow-lg border-white  rounded-lg">
            <MonthlyCasualAbsent></MonthlyCasualAbsent>
            <MonthlySickAbsent></MonthlySickAbsent>
            <MonthlyLateAttendance></MonthlyLateAttendance>
          </div>
        </div>
        <div className="w-full lg:w-2/5 p-1 lg:p-0">
          <LeaveApplication></LeaveApplication>
        </div>
      </div>
      <div className="w-full lg:w-[96%] mx-auto p-3 lg:p-0   mb-5">
        <div className="bg-white font-roboto px-2 rounded-lg shadow-xl">
          <NoticeBoard></NoticeBoard>
        </div>
      </div>
    </main>
  );
}
