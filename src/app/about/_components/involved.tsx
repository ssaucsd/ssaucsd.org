import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);
export default function Involved() {
  return (
    <section
      id="involved"
      className="w-full pt-4 md:pt-8 lg:pt-12 pb-4 md:pb-8 lg:pb-12 bg-background flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How can I get involved?
            </h2>
          </div>
          <div className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left pt-5">
            <h1 className="text-primary font-bold text-3xl">
              Connect with us on social media!
            </h1>
            <p className="mb-4">
              We post updates about our rehearsals, performances, and events on
              our Instagram and Discord. Follow us and join our server to stay
              up to date!
            </p>
            <div className="flex items-center gap-3">
              <Link target="_blank" href="https://discord.gg/PncDrAxvkS">
                <DiscordIcon className="w-10 h-10 bg-primary text-primary-foreground rounded-xl p-2" />
              </Link>
              <Link target="_blank" href="https://instagram.com/ssa_at_ucsd">
                <Instagram className="w-10 h-10 bg-primary text-primary-foreground rounded-xl p-2" />
              </Link>
            </div>
          </div>
          <div className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left pt-5">
            <h1 className="text-primary font-bold text-3xl">
              Join our ensemble!
            </h1>
            <p className="mb-4">
              {
                "We are always looking for new members to join our ensemble regardless of skill level!  If you are interested in joining, please email us at symphoni@ucsd.edu, and we'll provide any information you need."
              }
            </p>
            <div className="flex items-center gap-3">
              <Link target="_blank" href="mailto:symphoni@ucsd.edu">
                <Mail className="w-10 h-10 bg-primary text-primary-foreground rounded-xl p-2" />
              </Link>
            </div>
          </div>
          <div className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left pt-5">
            <h1 className="text-primary font-bold text-3xl">
              Come to our events!
            </h1>
            <p className="mb-4">
              {
                "We host a variety of events throughout the year, including rehearsals, performances, trips to the San Diego Symphony, and social gatherings. RSVP to them on our member dashboard, and we'll send additional info as needed!"
              }
            </p>
            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-xl cursor-pointer"
              >
                <Link href="https://members.ssaucsd.org/events">
                  RSVP to Events <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
