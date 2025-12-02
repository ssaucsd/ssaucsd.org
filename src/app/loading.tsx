import { Loader2 } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "SSA at UCSD",
  description:
    "The official site for the Symphonic Student Association at the University of California, San Diego",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <Loader2 className="text-primary h-10 w-10 animate-spin" />
    </div>
  );
}
