import { useContext } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Tasks from "./Tasks";

export default function ProjectView() {
  const { selectedProjectId, projects, deleteProject } = useContext(ProjectManagerContext);

  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="project-view w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-8">{selectedProject.title}</h1>
          <button onClick={deleteProject} className="hover:text-teal-300">
            Delete
          </button>
        </div>
        <p className="mb-4">{formattedDate}</p>
        <p className="whitespace-pre-wrap">{selectedProject.description}</p>
      </header>
      <Tasks />
    </div>
  );
}
