import { projects } from '../../content/projects';

export default function ProjectsPage() {
    return (
    <div>
        <h1>Projects</h1>
        {projects.map(project => (
        <div key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {project.links?.website && (
            <a href={project.links.website}>View Project →</a>
            )}
        </div>
        ))}
    </div>
    );
}