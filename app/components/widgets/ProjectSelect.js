import React, { useEffect, useState } from "react";
import { getProjects } from "@/app/lib/data";

const ProjectSelect = () => {
    const [projectId, setProjectId] = useState("");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsData = await getProjects();
            console.log(projectsData);
            setProjects(projectsData);
        };

        fetchProjects();
    }, []);

    return (
        <div className="form_group">
            <label>Project:</label>
            <select
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
            >
                <option value="">Select a project</option>
                {projects.map((project) => (
                    <option key={project._id} value={project._id}>
                        {project.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProjectSelect;
