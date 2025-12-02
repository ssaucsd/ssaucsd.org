import Link from "next/link";
import { Music } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | SSA at UCSD",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-10">
      <Music className="w-24 h-24 text-primary mb-6 animate-bounce" />
      <h1 className="text-8xl font-black text-primary mb-2">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        {
          "Oops! It looks like this page has gone slightly out of tune. We couldn't find the page you were looking for."
        }
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
      >
        Return Home
      </Link>
    </div>
  );
}
