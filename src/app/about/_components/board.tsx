import { BoardMember, boardMembers } from "@/data/board";
import { Card } from "@/components/ui/card";
import Image from "next/image";

function BoardMemberCard({
  name,
  position,
  pronouns,
  year,
  imageUrl,
  major,
  instrument,
  minor,
}: BoardMember) {
  return (
    <Card className="w-full overflow-hidden border-none shadow-none bg-transparent group">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-xl font-bold leading-tight">{name}</h3>
          {pronouns && (
            <span className="text-xs text-muted-foreground shrink-0">
              {pronouns}
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-primary">{position}</p>

        <div className="mt-2 flex flex-col gap-0.5 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Year:</span> {year}
          </p>
          <p>
            <span className="font-medium text-foreground">Major:</span> {major}
          </p>
          {minor && (
            <p>
              <span className="font-medium text-foreground">Minor:</span>{" "}
              {minor}
            </p>
          )}
          <p>
            <span className="font-medium text-foreground">Instrument:</span>{" "}
            {instrument}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default function Board() {
  return (
    <div className="w-full px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Board
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {boardMembers.map((member) => (
            <BoardMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
