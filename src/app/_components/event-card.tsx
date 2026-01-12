import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EventCard({
  id,
  title,
  start_time,
  image_url,
  location,
  end_time,
}: {
  id: string;
  title: string;
  start_time: string;
  image_url: string;
  location: string;
  end_time: string;
}) {
  return (
    <Link href={`/events/${id}`} className="block h-full">
      <Card className="group h-full flex flex-col gap-0 overflow-hidden rounded-lg border border-border bg-card p-0 shadow-sm transition-shadow duration-200 hover:shadow-md">
        {/* Image container - flexible height based on image */}
        <div className="relative w-full bg-muted/50">
          {image_url ? (
            <Image
              src={image_url}
              alt={title}
              width={400}
              height={500}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="flex aspect-4/5 w-full items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="text-base font-semibold leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm font-medium text-primary">
            {new Date(start_time).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              timeZone: "America/Los_Angeles",
            })}
            {" · "}
            {new Date(start_time).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "America/Los_Angeles",
            })}
            {end_time && (
              <>
                {" – "}
                {new Date(end_time).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  timeZone: "America/Los_Angeles",
                })}
              </>
            )}
          </p>
          <p className="mt-auto flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{location}</span>
          </p>
        </div>
      </Card>
    </Link>
  );
}
