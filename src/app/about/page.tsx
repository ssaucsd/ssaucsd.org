import type { Metadata } from "next";
import Hero from "./_components/hero";
import Involved from "./_components/involved";
import Mission from "./_components/mission";
import Membership from "./_components/membership";
import Board from "./_components/board";

export const metadata: Metadata = {
  title: "About Us | SSA at UCSD",
  description: "Learn more about the Symphonic Student Association at UCSD",
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
