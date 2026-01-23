interface Publication{
    title: string;
    authors: string[];
    year: number;
    journal?: string;
}

interface Project{
    name: string;
    description: string;
    links: {
        website?: string;
    }
}

interface Experience{
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    description: string;
}