// src/app/cv/page.tsx
import { aboutMe } from '../../content/aboutMe';

export default function CVPage() {
    return (
        <div>
        <h1>{aboutMe.name}</h1>
        <section>
            <h2>Education</h2>
        </section>
        <section>
            <h2>Experience</h2>
        </section>
        </div>
    );
    }