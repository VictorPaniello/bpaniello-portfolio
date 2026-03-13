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
	title: string;
	category: string;
	description: string;
	link: string;
	authors: string[];
}

interface List2Props {
	items?: ListItem[];
	className?: string;
}

const List2 = ({
	items = [ ],
	className,
}: List2Props) => {
	return (
		<section className={cn("py-32", className)}>
			<div className="container px-0 md:px-8">
				<h1 className="mb-10 px-4 text-4xl font-semibold md:mb-14 md:text-6xl text-center">
					Articles
				</h1>
				<div className="flex flex-col">
					<Separator />
					{items.map((item, index) => (
						<React.Fragment key={index}>
							<div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
								<div className="order-2 flex items-center gap-2 md:order-none">
									<div className="flex flex-col gap-1">
										<h3 className="font-semibold">{item.category}</h3>
									</div>
								</div>
								<p className="order-1 text-2xl font-semibold md:order-none md:col-span-2">
									{item.title}
								</p>
								<p className="order-2 text-xl font-light text-grey">
									{item.authors.join(", ")}
								</p>
								<Button variant="outline" asChild>
									<a
										className="order-3 ml-auto w-fit gap-2 md:order-none"
										href={item.link}
									>
										<span>View project</span>
										<ArrowRight className="h-4 w-4" />
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
