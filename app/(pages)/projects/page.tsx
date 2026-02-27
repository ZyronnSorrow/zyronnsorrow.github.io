import ProjectCard from "@/app/_components/project-card";
import { projects } from "@/app/_data/projects";

export default function ProjectsPage() {
    return (
        <div className="py-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
                {projects.map((projectData) => (
                    <ProjectCard key={projectData.name} project={projectData} />
                ))}
            </div>
        </div>
    );
}