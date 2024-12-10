import dynamic from "next/dynamic";
const AttendanceCards = dynamic(() => import("./components/AttendanceCards"));
const LeaveApplication = dynamic(() => import("./components/LeaveApplication"));
const BasicBars = dynamic(() => import("./components/Dailybar"))
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-11/12 mx-auto mt-16">
        <AttendanceCards></AttendanceCards>
      </div>
      <div className="w-11/12 flex flex-col lg:flex-row gap-5 mx-auto mt-5">
        <div className="w-3/5">
          <BasicBars></BasicBars>
        </div>
        <div className="w-2/5">
        <LeaveApplication></LeaveApplication>
        </div>
      </div>
    </main>
  );
}
