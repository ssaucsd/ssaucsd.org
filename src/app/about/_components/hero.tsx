"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] pt-12 md:pt-0">
      <div className="flex flex-col lg:flex-row gap-8 items-center px-4">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl font-black">What is SSA at UCSD?</h1>
          <h1 className="mt-5 text-2xl font-bold max-w-2xl text-primary">
            {
              "We are the Symphonic Student Association at the University of California, San Diego!"
            }
            <br />
            <br />
            {
              "We are UCSD's largest and most inclusive student-run classical music-oriented organization, for anyone interested in classical music, regardless of major or skill level."
            }
          </h1>
        </div>
        <Image
          src="/about/hero.webp"
          alt="SSA at UCSD"
          width={600}
          height={400}
          className="w-full max-w-[600px] h-auto object-cover rounded-xl shadow-2xl"
          priority
        />
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("mission")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className={`absolute bottom-8 transition-opacity duration-300 cursor-pointer ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ArrowDown className="animate-bounce" />
      </div>
    </div>
  );
}
