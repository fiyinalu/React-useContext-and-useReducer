import { useReducer, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import { taskReducer } from "../reducers/taskReducer";
import styles from "./TaskManager.module.css";

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");
  const { theme } = useTheme();

  const addTask = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    dispatch({ type: "add", payload: trimmedTask });
    setTask("");
  };

  return (
    <section
      className={`${styles.container} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <h2>Task Manager</h2>

      <div className={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task"
        />

        <button onClick={addTask} disabled={!task.trim()}>
          Add Task
        </button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((currentTask) => (
          <li key={currentTask.id} className={styles.taskItem}>
            <span>{currentTask.text}</span>

            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: currentTask.id,
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskManager;