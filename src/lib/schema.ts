interface Publication {
    title: string;
    authors: string[];
    year: number;
    journal?: string;
    doi?: string;
    pubmedId?: string;
    publicationType: "journal" | "book" | "thesis" | "conference" | "preprint" | "other";
    pages?: string;
    abstract?: string;
    keywords?: string[];
    links?: {
        doi?: string;
        pubmed?: string;
        pdf?: string;
        website?: string;
    }
}

interface Project {
    name: string;
    description: string;
    type: "research" | "clinical-trial" | "collaboration" | "other";
    status: "active" | "completed" | "on-hold" | "ongoing";
    researchArea?: string;
    methods?: string[];
    collaborators?: string[];
    links?: {
        doi?: string;
        pubmed?: string;
        website?: string;
    }
    startDate?: string;
    endDate?: string;
}

interface Education {
    degree: string;
    institution: string;
    description?: string;
    startDate: string;
    endDate?: string;
    fieldOfStudy?: string;
    location?: string;
    gpa?: number;
}

interface Certification {
    name: string;
    issuer: string;
    year: number;
    expirationDate?: string;
    links?: {
        certificate?: string;
    }
}

interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    description?: string;
    type?: "research" | "clinical" | "academic" | "industry" | "other";
    location?: string;
    researchFocus?: string[];
}

export type { Publication, Project, Education, Certification, Experience };