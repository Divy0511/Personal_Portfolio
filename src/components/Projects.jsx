import React from "react";

const Projects = () => {
    const projects = [
        { title: "Project 1", description: "Description of project 1" },
        { title: "Project 2", description: "Description of project 2" },
    ];

    return (
        <section id="projects" style={{ padding: "50px 20px" }}>
            <h2>My Projects</h2>
            <div>
                {projects.map((project, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
