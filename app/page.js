import AttendanceCards from "./components/AttendanceCards";
import BasicBars from "./components/Dailybar";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-11/12 mx-auto mt-16">
        <AttendanceCards></AttendanceCards>
      </div>
      <div>
       <BasicBars></BasicBars>
      </div>
    </main>
  );
}
