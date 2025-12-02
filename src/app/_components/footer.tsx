import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import type { ElementType } from "react";

// Custom Icons for those not in Lucide (or specific brand versions)
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

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: ElementType;
  label: string;
}) => (
  <Link
    href={href}
    target="_blank"
    className="flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors"
  >
    <div className="bg-primary-foreground p-1.5 rounded-xl">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <span className="text-lg font-medium">{label}</span>
  </Link>
);

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="w-full bg-primary text-primary-foreground py-12 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-12">Connect With Us!</h1>

        <div className="w-full flex justify-center">
          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-12 justify-items-start">
            <SocialLink
              href="mailto:symphoni@ucsd.edu"
              icon={Mail}
              label="Email"
            />
            <SocialLink
              href="https://discord.gg/PncDrAxvkS"
              icon={DiscordIcon}
              label="Discord"
            />
            <SocialLink
              href="https://github.com/ssaucsd"
              icon={Github}
              label="Github"
            />
            <SocialLink
              href="https://www.instagram.com/ssa_at_ucsd"
              icon={Instagram}
              label="Instagram"
            />
            <SocialLink
              href="https://linkedin.com/company/symphonic-student-association"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="http://www.youtube.com/@symphonicstudentassociatio8977"
              icon={Youtube}
              label="YouTube"
            />
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://vercel.com?utm_source=ssa-ucsd&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary border border-primary-foreground rounded-md px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-10 border-b-primary-foreground"></div>
            Powered by Vercel
          </a>
          <span className="text-xs font-semibold">
            Built with ❤️ by SSA @ UCSD
          </span>
        </div>
      </div>
    </footer>
  );
}
