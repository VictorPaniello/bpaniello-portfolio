import {
  ArrowRight,
  Award,
  Building2,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Trophy,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  link: string;
}

interface List2Props {
  heading?: string;
  items?: ListItem[];
  className?: string;
}

const List2 = ({
  heading = "Our Achievements & Recognition",
  items = [
    {
      icon: <Trophy />,
      title: "Industry Recognition",
      category: "Achievement",
      description: "Outstanding Performance Award.",
      link: "#",
    },
    {
      icon: <Award />,
      title: "Excellence Award",
      category: "Recognition",
      description: "Best in Category Winner.",
      link: "#",
    },
    {
      icon: <Lightbulb />,
      title: "Innovation Prize",
      category: "Technology",
      description: "Breakthrough Solution of the Year.",
      link: "#",
    },
    {
      icon: <HeartHandshake />,
      title: "Customer Success",
      category: "Service",
      description: "Top-Rated Solution Provider.",
      link: "#",
    },
    {
      icon: <Building2 />,
      title: "Global Leadership",
      category: "Management",
      description: "Executive Team of the Year.",
      link: "#",
    },
    {
      icon: <Leaf />,
      title: "Sustainability Impact",
      category: "Environmental",
      description: "Green Initiative Excellence.",
      link: "#",
    },
  ],
  className,
}: List2Props) => {
  return (
    <section className={cn("tw-:py-32", className)}>
      <div className="tw-:container tw-:px-0 tw-:md:px-8">
        <h1 className="tw-:mb-10 tw-:px-4 tw-:text-3xl tw-:font-semibold tw-:md:mb-14 tw-:md:text-4xl">
          {heading}
        </h1>
        <div className="tw-:flex tw-:flex-col">
          <Separator />
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="tw-:grid tw-:items-center tw-:gap-4 tw-:px-4 tw-:py-5 tw-:md:grid-cols-4">
                <div className="tw-:order-2 tw-:flex tw-:items-center tw-:gap-2 tw-:md:order-none">
                  <span className="tw-:flex tw-:h-14 tw-:w-16 tw-:shrink-0 tw-:items-center tw-:justify-center tw-:rounded-md tw-:bg-muted">
                    {item.icon}
                  </span>
                  <div className="tw-:flex tw-:flex-col tw-:gap-1">
                    <h3 className="tw-:font-semibold">{item.title}</h3>
                    <p className="tw-:text-sm tw-:text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>
                <p className="tw-:order-1 tw-:text-2xl tw-:font-semibold tw-:md:order-none tw-:md:col-span-2">
                  {item.description}
                </p>
                <Button variant="outline" asChild>
                  <a
                    className="tw-:order-3 tw-:ml-auto tw-:w-fit tw-:gap-2 tw-:md:order-none"
                    href={item.link}
                  >
                    <span>View project</span>
                    <ArrowRight className="tw-:h-4 tw-:w-4" />
                  </a>
                </Button>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { List2 };
