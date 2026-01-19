import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  imageSrc: string;
}

export default function Hero({ imageSrc }: HeroProps) {
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
          <h2 className="mt-5 text-2xl font-bold max-w-2xs text-primary">
            {
              "We are UCSD's largest student-run classical music-oriented organization."
            }
          </h2>
          <div className="mt-5 flex gap-2">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xl p-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              target="_blank"
              href="https://members.ssaucsd.org"
              rel="noopener noreferrer"
            >
              Join us <ArrowRight />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xl p-5 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-all"
              href="#contact"
            >
              Contact <ArrowRight />
            </a>
          </div>
        </div>
        <img
          src={imageSrc}
          alt="SSA at UCSD"
          width={600}
          height={400}
          className="w-full max-w-[600px] h-auto object-cover rounded-xl shadow-2xl"
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
