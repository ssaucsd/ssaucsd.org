import { Music, Users, Calendar, Heart, type LucideIcon } from "lucide-react";

const INITIATIVES = [
  {
    title: "Ensemble",
    description:
      "Our core orchestra that performs quarterly concerts featuring classical and contemporary repertoire. Open to all skill levels.",
    icon: Music,
    color: "bg-red-400",
  },
  {
    title: "Community",
    description:
      "Connect with fellow classical music enthusiasts through rehearsals, performances, and various social opportunities throughout the year and build lasting friendships.",
    icon: Users,
    color: "bg-teal-400",
  },
  {
    title: "Socials",
    description:
      "Social gatherings, cheap concerts, and other events to connect with fellow members.",
    icon: Calendar,
    color: "bg-orange-400",
  },
  {
    title: "Weekly Rehearsals",
    description:
      "Join us every Wednesday evening for music-making and social opportunities in preparation for quartely performances.",
    icon: Heart,
    color: "bg-pink-400",
  },
];

const InitiativeCard = ({
  title,
  description,
  icon: Icon,
  color,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}) => (
  <div className="flex gap-6 items-start">
    <div
      className={`${color} w-16 h-16 shrink-0 rotate-45 rounded-xl flex items-center justify-center shadow-lg`}
    >
      <Icon className="w-8 h-8 text-white -rotate-45" />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Initiatives() {
  return (
    <div id="initiatives" className="w-full py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-start text-left">
          <h1 className="text-5xl font-black">Initiatives</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {"What we're doing to make music accessible to everyone."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {INITIATIVES.map((item) => (
            <InitiativeCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
