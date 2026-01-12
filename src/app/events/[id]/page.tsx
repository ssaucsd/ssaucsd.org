import { getEventById } from "@/queries";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { generateEventSchema } from "@/lib/schemas";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return {
      title: "Event Not Found | SSA at UCSD",
    };
  }

  return {
    title: `${event.title} | SSA at UCSD`,
    description:
      event.description?.slice(0, 160) ||
      `Join us for ${event.title} at ${event.location}`,
    openGraph: {
      title: `${event.title} | SSA at UCSD`,
      description:
        event.description?.slice(0, 160) ||
        `Join us for ${event.title} at ${event.location}`,
      images: event.image_url ? [{ url: event.image_url }] : ["/hero.webp"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | SSA at UCSD`,
      description:
        event.description?.slice(0, 160) ||
        `Join us for ${event.title} at ${event.location}`,
      images: event.image_url ? [event.image_url] : ["/hero.webp"],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  const startDate = new Date(event.start_time);
  const endDate = new Date(event.end_time);

  const formattedDate = startDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Los_Angeles",
  });

  const formattedStartTime = startDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  });

  const formattedEndTime = endDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateEventSchema(event)),
        }}
      />
      <div className="min-h-screen bg-background">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left: Image - sticky, viewport-contained */}
          <div className="relative lg:sticky lg:top-0 lg:h-screen bg-muted/30">
            {event.image_url ? (
              <div className="h-full flex items-center justify-center p-6 lg:p-10">
                <Image
                  src={event.image_url}
                  alt={event.title}
                  width={800}
                  height={1000}
                  priority
                  className="max-h-[50vh] lg:max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
                />
              </div>
            ) : (
              <div className="h-64 lg:h-full flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>

          {/* Right: Content */}
          <article className="flex flex-col px-6 py-10 lg:px-12 lg:py-16">
            {/* Breadcrumb navigation */}
            <Breadcrumb
              items={[
                { name: "Events", href: "/events" },
                { name: event.title },
              ]}
              className="mb-8"
            />

            {/* Event Header */}
            <header className="mb-8">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl leading-tight">
                {event.title}
              </h1>
            </header>

            {/* Event Meta */}
            <div className="flex flex-col gap-4 mb-10 pb-10 border-b border-border/50">
              {/* Date */}
              <div className="flex items-center gap-3 text-foreground">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-medium">{formattedDate}</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 text-foreground">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-medium">
                  {formattedStartTime} – {formattedEndTime}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-foreground">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-medium">{event.location}</span>
              </div>
            </div>

            {/* Description */}
            {event.description && (
              <section className="flex-1">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  About this event
                </h2>
                <div className="text-base leading-relaxed text-foreground/90 whitespace-pre-wrap">
                  {event.description}
                </div>
              </section>
            )}

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-border/50">
              <p className="text-muted-foreground mb-3">
                We hope to see you there!
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
              >
                View all upcoming events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}
