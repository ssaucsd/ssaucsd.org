import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateBreadcrumbSchema, type BreadcrumbItem } from "@/lib/schemas";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  // Always prepend Home
  const allItems: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(allItems)),
        }}
      />

      {/* Visual breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className={cn(
          "flex items-center gap-1.5 text-sm text-muted-foreground",
          className,
        )}
      >
        <ol className="flex items-center gap-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.name} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {index === 0 ? <Home className="h-4 w-4" /> : item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href!}
                    className="hover:text-foreground transition-colors"
                  >
                    {index === 0 ? <Home className="h-4 w-4" /> : item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
