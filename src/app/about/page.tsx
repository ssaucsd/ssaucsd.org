import type { Metadata } from "next";
import Hero from "./_components/hero";
import Involved from "./_components/involved";
import Mission from "./_components/mission";
import Membership from "./_components/membership";
import Board from "./_components/board";

export const metadata: Metadata = {
  title: "About Us | SSA at UCSD",
  description:
    "Learn about the Symphonic Student Association at UCSD, our mission to promote classical music, our board members, and how to get involved.",
  keywords: [
    "about ssa ucsd",
    "ssa ucsd mission",
    "ucsd classical music organization",
    "student orchestra ucsd",
    "ssa board members",
    "ucsd music club",
    "classical music community",
  ],
  openGraph: {
    url: "https://ssaucsd.org/about",
    type: "website",
    title: "About Us | SSA at UCSD",
    description:
      "Learn about the Symphonic Student Association at UCSD, our mission to promote classical music, our board members, and how to get involved.",
    images: [
      {
        url: "/hero.webp",
        width: 600,
        height: 400,
        alt: "About SSA at UCSD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | SSA at UCSD",
    description:
      "Learn about the Symphonic Student Association at UCSD, our mission to promote classical music, our board members, and how to get involved.",
    images: [
      {
        url: "/hero.webp",
        width: 600,
        height: 400,
        alt: "About SSA at UCSD",
      },
    ],
  },
  alternates: {
    canonical: "https://ssaucsd.org/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Mission />
      <Involved />
      <Membership />
      <Board />
    </>
  );
}
