import { Experience1 } from "@/components/experience1";

export default function ExperiencePage() {
    return (
        <div className="relative min-h-screen">
            {/* Main Content */}
            <main id="home" className="max-w-4xl mx-auto px-2">
                {/* Hero Section */}
                <section className="flex items-center">
                    <Experience1 />
                </section>
            </main>
        </div>
    );
}