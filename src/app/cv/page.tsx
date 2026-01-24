// src/app/cv/page.tsx
import { profile } from '../../content/profile';

export default function CVPage() {
    return (
        <div>
        <h1>{profile.name}</h1>
        <section>
            <h2>Education</h2>
        </section>
        <section>
            <h2>Experience</h2>
        </section>
        </div>
    );
    }