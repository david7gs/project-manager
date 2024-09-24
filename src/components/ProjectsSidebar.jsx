import { useContext } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Button from "./Button";

export default function ProjectsSidebar() {
  const { selectedProjectId, projects, startNewProject, selectProject } = useContext(ProjectManagerContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-800 sm:text-5xl md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">Active Projects</h2>
      <div>
        <Button onClick={startNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-md my-1 hover:bg-teal-400/30 hover:text-teal-300  sm:text-lg";
          if (project.id === selectedProjectId) {
            cssClasses += " text-teal-300 bg-teal-400/30";
          } else {
            cssClasses += " text-slate-200";
          }
          return (
            <li key={project.id}>
              <button onClick={() => selectProject(project.id)} className={cssClasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
