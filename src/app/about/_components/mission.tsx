import React from "react";

export default function Mission() {
  return (
    <section
      id="mission"
      className="w-full pt-12 md:pt-24 lg:pt-32 pb-4 md:pb-8 lg:pb-12 bg-background flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
          </div>
          <div className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left">
            <p className="mb-4">
              The Symphonic Student Association at UC San Diego (SSA) is a
              student-run organization committed to fostering a community for
              students and community members who share an interest in classical
              music. SSA also strives to make classical music more accessible in
              the community by presenting regular free concerts and workshops
              both on and off campus.
            </p>
            <p className="mb-4">
              SSA primarily rehearses its own chamber ensembles and presents
              yearly showcases at the Che Cafe (and more recently also at
              UCSD&apos;s Epstein Family Amphitheater). SSA selects music from
              various genres within classical music and aims to provide a great
              experience for both musicians and the audience regardless of prior
              exposure to classical music.
            </p>
            <p className="mb-4">
              SSA is also the primary social platform for the UCSD Chamber
              Orchestra and hosts social events open to the entire UCSD
              community. In addition, SSA regularly performs at various gigs,
              local senior homes, and children&apos;s centers.
            </p>
            <p>
              We have ways for you to be involved with SSA whether or not you
              play an instrument or not! You can subscribe to our newsletter,
              join our Discord, and follow us on Instagram! We hope to see you
              around!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
