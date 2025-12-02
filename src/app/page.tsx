import Hero from "./_components/hero";
import Initiatives from "./_components/initiatives";
import Events from "./_components/events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSA at UCSD",
  description:
    "SSA at UCSD - University of California, San Diego's largest student-run classical music-oriented organization.",
  keywords: [
    "classical music",
    "music",
    "ucsd",
    "student-run",
    "organization",
    "orchestra",
    "music club",
  ],
  openGraph: {
    url: "https://ssaucsd.org",
    type: "website",
    title: "SSA at UCSD",
    description:
      "SSA at UCSD - University of California, San Diego's largest student-run classical music-oriented organization.",
    images: [
      {
        url: "/hero.webp",
        width: 600,
        height: 400,
        alt: "SSA at UCSD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSA at UCSD",
    description:
      "SSA at UCSD - University of California, San Diego's largest student-run classical music-oriented organization.",
    images: [
      {
        url: "/hero.webp",
        width: 600,
        height: 400,
        alt: "SSA at UCSD",
      },
    ],
  },
  alternates: {
    canonical: "https://ssaucsd.org",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Initiatives />
      <Events />
    </>
  );
}
