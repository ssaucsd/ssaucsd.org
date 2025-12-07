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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Symphonic Student Association at UCSD",
            url: "https://ssaucsd.org",
            logo: "https://ssaucsd.org/favicon/android-chrome-512x512.png",
            sameAs: [
              "https://github.com/ssaucsd",
              "https://www.instagram.com/ssa_at_ucsd",
              "https://linkedin.com/company/symphonic-student-association",
              "http://www.youtube.com/@symphonicstudentassociatio8977",
              "https://discord.gg/PncDrAxvkS",
            ],
            description:
              "SSA at UCSD - University of California, San Diego's largest student-run classical music-oriented organization.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "La Jolla",
              addressRegion: "CA",
              postalCode: "92093",
              addressCountry: "US",
            },
          }),
        }}
      />
      <Hero />
      <Initiatives />
      <Events />
    </>
  );
}
