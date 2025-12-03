import { getEvents } from "../../queries";

import { EventCard } from "./event-card";

export default async function Events() {
  const events = await getEvents();
  return (
    <div className="w-full py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-start text-left">
          <h2 className="text-5xl font-black">Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {"What's coming up."}
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
