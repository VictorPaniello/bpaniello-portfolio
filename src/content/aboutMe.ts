import type { AboutMe } from "../../lib/schema";
import type { Education } from "../../lib/schema";

export const aboutMe = {
    name: "Blanca Paniello",
    title: "Dr.",
    email: "blancapaniello@blancapaniello.com",
    location: "Barcelona",
    bio: "Your professional bio here...",
    orcidId: "0000-0002-xxxx-xxxx",
    education: [
    {
        degree: "PhD in Medicine",
        institution: "University Name",
        startDate: "2018",
        endDate: "2022",
        location: "Barcelona, Spain",
    },
    ],
    experience: [
    {
        company: "Hospital Name",
        position: "Research Position",
        startDate: "2022-01",
        description: "What you did here...",
        type: "research",
    },
    ],
};