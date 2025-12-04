import { db } from "@/index";
import { ssamembersEvent } from "@/db/schema";
import { desc } from "drizzle-orm";

const getLocalTimeAsUTC = () => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const part = (type: string) =>
    parseInt(parts.find((p) => p.type === type)?.value || "0");

  const year = part("year");
  const month = part("month") - 1; // 0-indexed
  const day = part("day");
  const hour = part("hour");
  const minute = part("minute");
  const second = part("second");

  return new Date(
    Date.UTC(year, month, day, hour, minute, second),
  ).toISOString();
};

export default async function DebugEventsPage() {
  const events = await db
    .select()
    .from(ssamembersEvent)
    .orderBy(desc(ssamembersEvent.date));
  const now = new Date().toISOString();
  const adjustedNow = getLocalTimeAsUTC();

  return (
    <div className="p-8 bg-white text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Debug Events</h1>
      <p className="mb-2">Server Time (ISO): {now}</p>
      <p className="mb-4 font-bold text-blue-600">
        Adjusted Now (LA as UTC): {adjustedNow}
      </p>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Date (Raw)</th>
            <th className="border p-2">End Date (Raw)</th>
            <th className="border p-2">End {">"} Adjusted Now?</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="border p-2">{event.id}</td>
              <td className="border p-2">{event.name}</td>
              <td className="border p-2">{event.date}</td>
              <td className="border p-2">{event.endDate ?? "NULL"}</td>
              <td className="border p-2">
                {event.endDate
                  ? event.endDate > adjustedNow
                    ? "YES"
                    : "NO"
                  : event.date > adjustedNow
                    ? "YES (Start Date)"
                    : "NO"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
