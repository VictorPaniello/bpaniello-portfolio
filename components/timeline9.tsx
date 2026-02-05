import * as React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineEntry = {
	date: string;
	title: string;
	subtitle?: string | React.ReactNode;
	content: string | React.ReactNode;
};

const timelineData: TimelineEntry[] = [
	{
		date: "2023 - 2026",
		title: "PhD in Biomedicine",
		subtitle: (
			<>
				Barcelona Institute for Global Health 
				<a href="https://www.isglobal.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
					&nbsp;(ISGlobal)
				</a>
				{" and "}
				Universitat Pompeu Fabra 
				<a href="https://www.upf.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline">
					&nbsp;(UPF)
				</a>
			</>
		),    
		content: `
		<ul>
			<li>PhD Thesis: Socio-economic and demographic drivers of health vulnerability and climate change adaptation in Europe.
				<ul>
					<li style="margin-left: 1.5rem;"><i>Under 
						<a href="https://www.joanballester.eu/" target="_blank" rel="noopener noreferrer" className="hover:underline">Joan Ballester</a>'s supervision</i>
					</li>
				</ul>
			</li>
			<br>
			<li>PhD Secondment at <a href="https://deplazio.it" target="_blank" rel="noopener noreferrer" className="hover:underline">DEP Lazio Region</a>, Rome, Italy
				<ul>
					<li style="margin-left: 1.5rem;"><i>Under Francesca de'Donato and Massimo Stafoggia's supervision</i></li>
				</ul>
			</li>
		</ul>`,
	},
	{
		date: "2021 - 2023",
		title: "Master's Degree in Medical Sciences (MMSc) in Public Health Sciences with specialisation in Epidemiology",
		subtitle: (
			<>
				<a href="https://education.ki.se" target="_blank" rel="noopener noreferrer" className="hover:underline">
					Karolinska Institutet
				</a>			
			</>
		),
		content: `
		<ul>
			<li>Master's Thesis: Public risk perception of multiple hazareds during the COVID-19 pandemic in Italy and Sweden: a network analysis. <b>Graduated with distinction</b>.
				<ul>
					<li style="margin-left: 1.5rem;"><i>Under 
						<a href="https://elenaraffetti.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Elena Rafetti</a>'s supervision</i>
					</li>
				</ul>
			</li>
		</ul>
		`
	},
	{
		date: "2015 - 2019",
		title: "Bachelor's Degree (BSc) in Biomedical Sciences",
		subtitle: (
			<>
				<a href="https://www.ub.edu" target="_blank" rel="noopener noreferrer" className="hover:underline">
					University of Barcelona
				</a>			
			</>
		),
		content: `
		<ul>
			<li>Bachelor's Thesis: Environmental Risk Score and sub-clinical psychotic risk in children from the general population.
				<ul>
					<li style="margin-left: 1.5rem;"><i>Under Léa Maitre and Silvia Alemany's supervision</i></li>
				</ul>
			</li>
		</ul>
		`
	},
];

interface Timeline9Props {
	className?: string;
}

const Timeline9 = ({ className }: Timeline9Props) => {
	return (
		<section className={cn("py-32", className)}>
			<div className="container space-y-10 lg:space-y-20 tracking-tighter">
				<h1 className="text-center text-4xl font-semibold text-foreground sm:text-6xl">
					Education
				</h1>
				<div className="relative mx-auto max-w-4xl">
					<Separator
						orientation="vertical"
						className="absolute top-4 left-2 bg-muted"
					/>
					{timelineData.map((entry, index) => (
						<div key={index} className="relative mb-10 pl-8">
							<div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-foreground" />
							<h4 className="rounded-xl py-2 text-xl text-foreground font-bold xl:mb-2 xl:px-3">
								{entry.title}
							</h4>
							<h4 className="rounded-xl py text-sm text-muted-foreground font-semibold mb-2 xl:mb-2 xl:px-3">
								{entry.subtitle}
							</h4>

							<h5 className="text-md top-3 -left-34 rounded-xl text-muted-foreground xl:absolute">
								{entry.date}
							</h5>

							<Card className="my-5 bg-background border-none shadow-none text-foreground">
								<CardContent className="px-0 xl:px-2">
									<div
										className="prose text-foreground dark:prose-invert"
										dangerouslySetInnerHTML={{ __html: entry.content }}
									/>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export { Timeline9 };
