"use client";
import React, { useState } from "react";
import styles from "./NewProjectForm.module.css";
import { addProject } from "@/app/lib/actions";

const NewProjectForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [projectId, setProjectId] = useState("");
    const [personal, setPersonal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = {
            title,
            description,
            personal,
        };

        try {
            addProject(newProject);
            // Clear the form
            setTitle("");
            setDescription("");
            setCompleted(false);
            setProjectId("");
            setPersonal(false);
        } catch (error) {
            console.error("There was an error creating the task!", error);
        }
    };

    return (
        <div>
            <form className={styles.new_project_form} onSubmit={handleSubmit}>
                <h2>Create New project</h2>
                <div className={styles.form_group}>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.form_group}>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.form_group}>
                    <label>Personal:</label>
                    <input
                        type="checkbox"
                        checked={personal}
                        onChange={(e) => setPersonal(e.target.checked)}
                    />
                </div>
                <button type="submit">Add project</button>
            </form>
        </div>
    );
};

export default NewProjectForm;
