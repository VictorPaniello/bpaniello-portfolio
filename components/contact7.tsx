import { Mail, BriefcaseBusiness, HeartHandshake } from "lucide-react";

import { cn } from "@/lib/utils";

interface Contact7Props {
	title?: string;
	description?: string;
	workEmailLabel?: string;
	workEmailDescription?: string;
	workEmail?: string;
	volEmailLabel?: string;
	volEmailDescription?: string;
	volEmail?: string;
	
	className?: string;
}

const Contact7 = ({
	workEmailLabel = "For work-related topics",
	workEmailDescription = "You can reach me at:",
	workEmail = "blanca.paniello@isglobal.com",
	volEmailLabel = "For volunteering collaborations",
	volEmailDescription = "You can reach me at:",
	volEmail = "paniblanca@gmail.com",
	className,
	}: Contact7Props) => {
	
	return (
		<section className={cn("bg-foreground py-4", className)}>
			<div className="container">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="rounded-lg bg-muted p-6">
						<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
							<BriefcaseBusiness className="h-6 w-auto" />
						</span>
						<p className="mb-1 text-lg font-semibold">{workEmailLabel}</p>
						<p className="mb-3 text-muted-foreground">{workEmailDescription}</p>
						<a href={`mailto:${workEmail}`} className="font-semibold hover:underline">
							{workEmail}
						</a>
					</div>
					<div className="rounded-lg bg-muted p-6">
						<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
							<HeartHandshake className="h-6 w-auto" />
						</span>
						<p className="mb-1 text-lg font-semibold">{volEmailLabel}</p>
						<p className="mb-3 text-muted-foreground">{volEmailDescription}</p>
						<a href={`mailto:${volEmail}`} className="font-semibold hover:underline">
							{volEmail}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

	export { Contact7 };
