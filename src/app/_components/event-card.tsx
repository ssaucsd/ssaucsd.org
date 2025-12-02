import { Card } from "@/components/ui/card";
import Image from "next/image";

export function EventCard({
  name,
  date,
  imageUrl,
  location,
  endDate,
}: {
  name: string;
  date: string;
  imageUrl: string | null;
  location: string;
  endDate: string | null;
}) {
  return (
    <Card className="w-full overflow-hidden border-none shadow-none bg-transparent">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
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
        <h3 className="text-lg font-semibold leading-tight">{name}</h3>
        <p className="text-sm font-medium text-muted-foreground">
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            timeZone: "UTC",
          })}
          {" • "}
          {new Date(date).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "UTC",
          })}
          {endDate && (
            <>
              {" - "}
              {new Date(endDate).toLocaleTimeString("en-US", {
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
