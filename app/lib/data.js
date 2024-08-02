"use server";

import { Project } from "./models/Project";
import { Task } from "./models/Task";
import { connectToDb } from "./utils";

export const getTasks = async () => {
    try {
        connectToDb();
        const tasks = await Task.find();
        return tasks;
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getProjects = async () => {
    try {
        connectToDb();
        const projects = await Project.find();
        const plainProjects = projects.map(project => project.toObject())
        return plainProjects;
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
};
