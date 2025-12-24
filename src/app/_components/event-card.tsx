import { Card } from "@/components/ui/card";
import Image from "next/image";

export function EventCard({
  title,
  start_time,
  image_url,
  location,
  end_time,
}: {
  title: string;
  start_time: string;
  image_url: string;
  location: string;
  end_time: string;
}) {
  return (
    <Card className="w-full overflow-hidden border-none shadow-none bg-transparent">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted">
        {image_url ? (
          <Image
            src={image_url}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-sm font-medium text-muted-foreground">
          {new Date(start_time).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            timeZone: "UTC",
          })}
          {" • "}
          {new Date(start_time).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "UTC",
          })}
          {end_time && (
            <>
              {" - "}
              {new Date(end_time).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              })}
            </>
          )}
        </p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </Card>
  );
}
