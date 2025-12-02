"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error | SSA at UCSD",
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-8">
      <AlertTriangle className="w-24 h-24 text-destructive mb-6 animate-pulse" />
      <h1 className="text-8xl font-black text-primary mb-2">500</h1>
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        We apologize for the inconvenience. It seems like our server hit a wrong
        note. Please try again later.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-secondary text-secondary-foreground px-8 py-3 rounded-xl font-bold text-lg hover:bg-secondary/80 transition-colors shadow-lg hover:shadow-xl"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
