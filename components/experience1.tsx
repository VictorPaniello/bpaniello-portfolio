"use client"

import { Download } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Experience1Props {
	className?: string;
}

const Experience1 = ({ className }: Experience1Props) => {
	const experience = [
		{
			period: "Sep 2025 - Now",
			title: "PhD Fellow",
			description:
				"Currently pursuing my doctoral thesis titled: Socio-economic and demographic drivers of health vulnerability and climate change adaptation in Europe.",
			company: "Barcelona Institute for Global Health (ISGlobal)",
		},
		{
			period: "May 2025 - Sep 2025",
			title: "Consultant",
			description:
				"Provided technical and scientific support to the Urban Resilience to Climate Change project. Contributed to the preparation of a diagnostic report on climate-related challenges and supported the design and selection of a proposed research project.",
			company: "Exea Impact & ISGlobal",
		},
		{
			period: "Jul 2023 - Sep 2023",
			title: "Consultant",
			description:
				"Coordinated a project assessing the integration of health considerations across 194 Nationally Determined Contributions (NDCs). Contributed to the development of a policymakers’ report and communication strategy.",
			company: "Global Climate and Health Alliance (GCHA) & Clean Air Fund",
		},
		{
			period: "June 2023",
			title: "Research Assitant",
			subtitle: "Epidemiology and Public Health Intervention Research (EPHIR)",
			description:
				"Conducted data analysis and reporting for the Stockholm Public Health Agency. The project focused on network analysis of anxiety and depressive symptoms among youth during the COVID-19 pandemic in Sweden.",
			company: "Karolinska Institutet",
		},
		{
			period: "Jul 2023 - Sep 2023",
			title: "Research Assistant",
			subtitle: "Centre of Natural Hazards and Disaster Science (CNDS)",
			description:
				"Finalised the publication of my Master's thesis and supported research on climate- and risk-perception-related publications, including assistance with ethical approval processes.",
			company: "Uppsala University",
		},
		{
			period: "May 2022 - Dec 2022",
			title: "Student Coordinator",
			subtitle: "Swedish Institute for Global Health Transformation (SIGHT)",
			description:
				"Coordinated student engagement activities and served as a liaison between youth representatives and the SIGHT Secretariat. Member of the SIGHT Secretariat at the Royal Swedish Academy of Sciences.",
			company: "Royal Swedish Academy of Sciences",
		},
		{
			period: "May 2021 - Aug 2022",
			title: "Consultant",
			description:
				"Performed data analysis for the Healthy NDC Scorecard, assessing country progress in integrating health into national climate commitments. Contributed to evidence synthesis and reporting.",
			company: "Global Climate and Health Alliance (GCHA)",
		},
		{
			period: "Dec 2019 - Jul 2021",
			title: "Consultant",
			subtitle: "Addictions Unit, Fundació Clínic per a la Recerca Biomèdica",
			description:
				"Worked on national and European public health projects examining the role of drugs in mental health and related socioeconomic determinants. Responsibilities included data collection, statistical analysis, and reporting.",
			company: "Hospital Clínic, Barcelona",
		},
		{
			period: "May 2019 - Nov 2019",
			title: "Research Assistant",
			subtitle: "Tobacco Control Unit",
			description:
				"Contributed to the EU Horizon 2020 project TackSHS, investigating the health impacts of second-hand tobacco smoke and e-cigarette emissions. Conducted fieldwork and data collection.",
			company: "Bellvitge Biomedical Research Institute (IDIBELL)",
			additional: "Attendance at TackSHS Final Conference, European Parliament (Brussels, October 2019).",
		},
	];

    const handleDownloadCV = async () => {
        try {
            const response = await fetch('/api/download');
            if (!response.ok) throw new Error('Download failed');
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Paniello-Castillo-B_CV.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading CV:', error);
            alert('Failed to download CV. Please try again.');
        }
    };

	return (
		<section className={cn("py-32", className)}>
			<div className="container space-y-10 lg:space-y-20 tracking-tighter">
				<div className="flex w-full items-end justify-around">
					<h1 className="text-4xl font-semibold lg:text-6xl">
						Work & Research Experience
					</h1>
					<Button variant="ghost" size="lg" className="font-semibold hover:cursor-pointer" onClick={handleDownloadCV}>
						CV <Download className="size-4" />
					</Button>
				</div>
				<ul className="">
					{experience.map((exp, index) => (
						<li
							key={index}
							className="flex flex-col justify-between border-b py-10 md:flex-row"
						>
							<div className="max-w-lg text-xl font-semibold lg:w-1/4">
								{exp.period}
							</div>
							<div className="lg:w-1/2">
								<h2 className="mb-1 text-2xl font-semibold">
									{exp.title}
								</h2>
								<h3 className="mb-4 text-1xl  italic">
									{exp.subtitle}
								</h3>
								<p className="text-foreground/80 ">{exp.description}</p>
								<p className="text-foreground/50 italic mt-2">{exp.additional}</p>
							</div>
							<div className="text-right lg:w-1/5">{exp.company}</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export { Experience1 };
