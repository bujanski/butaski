import Image from "next/image";
import styles from "./page.module.css";
import NewTaskForm from "./components/editors/NewTaskForm";
import NewProjectForm from "./components/editors/NewProjectForm";


export default function Home() {

    return (
        <main className={styles.main}>
            <NewTaskForm />
            <NewProjectForm />
        </main>
    );
}
