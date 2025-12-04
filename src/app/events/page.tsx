import { getMoreEvents } from "@/queries";
import { EventCard } from "../_components/event-card";
import { CalendarX } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events | SSA at UCSD",
  description:
    "Explore upcoming classical music concerts, recitals, and social gatherings hosted by SSA at UCSD. Join the largest student-run classical music organization at UC San Diego.",
  keywords: [
    "ssa ucsd events",
    "ucsd classical music concerts",
    "ucsd orchestra schedule",
    "student recitals ucsd",
    "music performances ucsd",
    "ssa events calendar",
    "classical music",
    "ucsd",
  ],
  openGraph: {
    url: "https://ssaucsd.org/events",
    type: "website",
    title: "Upcoming Events | SSA at UCSD",
    description:
      "Explore upcoming classical music concerts, recitals, and social gatherings hosted by SSA at UCSD.",
    images: [
      {
        url: "/hero.webp",
        width: 600,
        height: 400,
        alt: "SSA at UCSD Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Events | SSA at UCSD",
    description:
      "Explore upcoming classical music concerts, recitals, and social gatherings hosted by SSA at UCSD.",
    images: [
      {
        url: "/hero.webp",
        width: 600,
        height: 400,
        alt: "SSA at UCSD Events",
      },
    ],
  },
  alternates: {
    canonical: "https://ssaucsd.org/events",
  },
};

export default async function EventsPage() {
  const events = await getMoreEvents();

  return (
    <div className="w-full py-12 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-start text-left">
          <h1 className="text-5xl font-black">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Check out what we have planned.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {events.length > 0 ? (
            events.map((event) => <EventCard key={event.id} {...event} />)
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center gap-4 py-12 text-muted-foreground">
              <CalendarX className="w-12 h-12" />
              <p className="text-xl font-medium">No upcoming events :(</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
