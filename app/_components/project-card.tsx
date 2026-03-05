import Image from "next/image";
import Link from "next/link";

import { ProjectData } from "@/app/_data/projects";

type ProjectCardProps = {
    project: ProjectData;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <div className="flex flex-col justify-center items-center aspect-2/1 w-full">
                {project.projectThumbnail != undefined ? (
                    <Image
                        src={project.projectThumbnail}
                        alt={`${project.name} Thumbnail`}
                        className="bg-white p-2"
                    />
                ) : (
                    <div />
                )}
            </div>
            <p>{project.description}</p>
            {project.projectUrl != undefined && (
                <Link
                    href={project.projectUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn"
                >
                    Project
                </Link>
            )}
            {project.repositoryUrl != undefined && (
                <Link
                    href={project.repositoryUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn"
                >
                    Project Repository
                </Link>
            )}
            {project.issuesUrl != undefined && (
                <Link
                    href={project.issuesUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn"
                >
                    Project Issues
                </Link>
            )}
        </div>
    );
}
