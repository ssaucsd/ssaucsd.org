import { createClient } from "@/utils/supabase/server";

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
  const supabase = await createClient();
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("start_time", { ascending: false });

  const now = new Date().toISOString();
  const adjustedNow = getLocalTimeAsUTC();

  if (error) {
    return <div className="p-8">Error loading events: {error.message}</div>;
  }

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
            <th className="border p-2">Title</th>
            <th className="border p-2">Start Time (Raw)</th>
            <th className="border p-2">End Time (Raw)</th>
            <th className="border p-2">End {">"} Adjusted Now?</th>
          </tr>
        </thead>
        <tbody>
          {(events ?? []).map((event) => (
            <tr key={event.id}>
              <td className="border p-2">{event.id}</td>
              <td className="border p-2">{event.title}</td>
              <td className="border p-2">{event.start_time}</td>
              <td className="border p-2">{event.end_time}</td>
              <td className="border p-2">
                {event.end_time > adjustedNow ? "YES" : "NO"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
