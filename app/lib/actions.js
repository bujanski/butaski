"use server";

import { Project } from "./models/Project";
import { Task } from "./models/Task";
import { connectToDb } from "./utils";

export const addTask = async (formData) => {
    // const {title, description, personal } = formData;
    try {
        connectToDb();
        const newTask = new Task(formData);
        await newTask.save();
        console.log("new task save to database")
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const addProject = async (formData) => {
    // const {title, description, personal } = formData;
    try {
        connectToDb();
        const newProject = new Project(formData);
        await newProject.save();
        console.log("new project save to database")
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}