"use client";
import React, { useState } from 'react';
import styles from './NewTaskForm.module.css';
import { addTask } from '@/app/lib/actions';
import ProjectSelect from '../widgets/ProjectSelect';

const NewTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [personal, setPersonal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      projectId,
      personal,
    };

    try {
      addTask(newTask);
      // Clear the form
      setTitle('');
      setDescription('');
      setCompleted(false);
      setProjectId('');
      setPersonal(false);
    } catch (error) {
      console.error('There was an error creating the task!', error);
    }
  };

  return (
    <form className={styles.new_task_form} onSubmit={handleSubmit}>
      <h2>Create New Task</h2>
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
      <ProjectSelect
        projectId={projectId}
        setProjectId={setProjectId}
      />
      <div className={styles.form_group}>
        <label>Personal:</label>
        <input
          type="checkbox"
          checked={personal}
          onChange={(e) => setPersonal(e.target.checked)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
