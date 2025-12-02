import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Membership() {
  return (
    <section
      id="membership"
      className="w-full pt-4 md:pt-8 lg:pt-12 pb-12 md:pb-24 lg:pb-32 bg-background flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How do I become a member?
            </h2>
          </div>
          <div className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            <p className="mb-8">
              Become a member of SSA at UCSD to access our events, resources,
              and ensemble! Just create a free account through the membership
              portal by clicking on the link below. All skill levels and majors
              are welcome.
            </p>
            <Button
              asChild
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-xl cursor-pointer"
            >
              <Link target="_blank" href="https://members.ssaucsd.org">
                Sign up now!
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
