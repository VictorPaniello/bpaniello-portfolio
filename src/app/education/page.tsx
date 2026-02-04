import { Timeline9 } from "@/components/timeline9";

export default function ExperiencePage() {
    return (
        <div className="relative min-h-screen">
            {/* Main Content */}
            <main id="home" className="max-w-4xl mx-auto px-2">
                {/* Hero Section */}
                <section className="flex items-center">
                    <Timeline9 />
                </section>
            </main>
        </div>
    );
}