import { useContext, useState } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import NewTask from "./NewTask";
import TaskListItem from "./TaskListItem";

export default function Tasks() {
  const { selectedProjectId, tasks, deleteTask } = useContext(ProjectManagerContext);

  const selectedProjectTasks = tasks.filter((task) => task.projectId === selectedProjectId);

  return (
    <section className="tasks">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <NewTask />
      {selectedProjectTasks.length === 0 && <p className="my-4">This project does not have any tasks yet.</p>}
      {selectedProjectTasks.length > 0 && (
        <ul className="p-4 mt-8">
          {selectedProjectTasks.map((task) => (
            <TaskListItem task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}
