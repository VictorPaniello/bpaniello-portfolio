// src/app/cv/page.tsx
import { aboutMe } from '../../content/aboutMe';

export default function AboutMePage() {
    return (
        <div>
            <h1 className="text-5xl font-bold mb-4">{aboutMe.name}</h1>
            <section>
                <h2 className="text-3xl font-bold mb-4">Education</h2>
            </section>
            <section>
                <h2 className="text-3xl font-bold mb-4">Experience</h2>
            </section>
        </div>
    );
}