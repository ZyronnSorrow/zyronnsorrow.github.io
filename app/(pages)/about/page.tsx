import { aboutSkills } from "@/app/_data/about";

export default function About() {
    return (
        <div className="flex flex-col w-full">
            <h1 className="my-4 text-4xl font-bold">About Kevin</h1>
            <h2 className="my-2 text-2xl font-bold">Professional Summary</h2>
            <p>
                Software Engineer with over 7 years of experience building scalable backend architectures and intuitive cross-platform applications.
                Proven track record in transitioning monolithic systems to microservices and implementing robust CI/CD pipelines. Committed to writing clean,
                maintainable code and fostering sustainable development practices that ensure long-term system stability and team productivity.
            </p>
            <div className="my-4 md:my-8" />
            <h2 className="my-2 text-2xl font-bold">Core Competencies</h2>
            <div className="grid grid-cols-1 min-w-0 md:grid-cols-2">
                {aboutSkills.map((skillCategory) => (
                    <div key={skillCategory.category} className="my-2">
                        <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                        <ul className="list-disc pl-5">
                            {skillCategory.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="my-4 md:my-8" />
            <h2 className="my-2 text-2xl font-bold">Education</h2>
            <p>Bachelors of Innovation (BI) in Game Design and Development; Minor in Computer Science</p>
            <p className="pl-0 md:pl-5">-- University of Colorado at Colorado Springs (2019)</p>
            <hr className="my-8" />
            <p>
                Kevin is passionate about sustainable software development, video game development, and technology. He has experience working with the Unity
                game engine, Godot 4 game engine, and a bit of the Unreal Engine 4 game engine. He has a history of working with companies developing
                production-ready software to consumers in backend and full-stack roles. Currently, Kevin is pursuing freelance work related to his skills as
                a software and game developer. He has a creative mind and enjoys making and playing video games in his spare time.
            </p>
        </div>
    );
}