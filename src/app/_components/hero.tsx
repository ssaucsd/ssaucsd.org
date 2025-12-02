"use client";

import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row gap-8 items-center px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-base bg-primary text-primary-foreground px-3 py-2 rounded-full mb-4 mt-8 md:mt-0 flex items-center gap-2">
            <Sparkles /> Est. 2018
          </span>
          <h1 className="text-5xl font-black">
            SSA <br /> at <br /> UCSD
          </h1>
          <h1 className="mt-5 text-2xl font-bold max-w-2xs text-primary">
            {
              "We are UCSD's largest student-run classical music-oriented organization."
            }
          </h1>
          <div className="mt-5 flex gap-2">
            <Button className="rounded-full text-xl p-5" asChild>
              <Link target="_blank" href="https://members.ssaucsd.org">
                Join us <ArrowRight />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full text-xl p-5"
              asChild
            >
              <Link href="#contact">
                Contact <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/hero.webp"
          alt="SSA at UCSD"
          width={600}
          height={400}
          className="w-full max-w-[600px] h-auto object-cover rounded-xl shadow-2xl"
          preload
        />
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("initiatives")?.scrollIntoView({
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
