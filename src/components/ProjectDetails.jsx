import { useContext, useState, useRef } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Tasks from "./Tasks";
import Modal from "./Modal";
import EditableField from "./EditableField";

export default function ProjectView() {
  const { selectedProjectId, projects, deleteProject, editProject } = useContext(ProjectManagerContext);
  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  const modal = useRef();

  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Looks like you forgot to add a task.</p>
        <p className="text-stone-600 mb-4">Please make sure to add a task</p>
      </Modal>

      <div className="project-view w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="project-title flex items-center justify-between">
            <EditableField data={selectedProject} projectProp="title">
              <h1 className="text-3xl font-bold mb-8">{selectedProject.title}</h1>
            </EditableField>
            <button onClick={deleteProject} className="hover:text-teal-300">
              Delete
            </button>
          </div>

          <EditableField data={selectedProject} projectProp="dueDate">
            <p className="mb-4">{formattedDate}</p>
          </EditableField>

          <EditableField data={selectedProject} projectProp="description">
            <p className="whitespace-pre-wrap">{selectedProject.description}</p>
          </EditableField>
        </header>
        <Tasks />
      </div>
    </>
  );
}
