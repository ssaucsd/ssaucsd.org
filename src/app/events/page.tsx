import { getMoreEvents } from "@/queries";
import { EventCard } from "../_components/event-card";

export default async function EventsPage() {
  const events = await getMoreEvents();

  return (
    <div className="w-full py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-start text-left">
          <h1 className="text-5xl font-black">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Check out what we have planned.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
