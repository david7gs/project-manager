import { useState, createContext } from "react";

export const ProjectManagerContext = createContext({
  selectedProjectId: "",
  view: "",
  // projectView: "",
  projects: [],
  tasks: [],
  startNewProject: () => {},
  cancelNewProject: () => {},
  addProject: () => {},
  selectProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  editTask: () => {},
  deleteTask: () => {},
  updateView: () => {},
});

export default function ProjectManagerContextProvider({ children }) {
  const [masterProjects, setMasterProjects] = useState({
    selectedProjectId: undefined,
    // view: "ABOUT",
    // projectView: undefined,
    view: "LANDING",
    projects: [],
    tasks: [],
  });

  function handleStartNewProject() {
    console.log(`handleStartNewProject firing`);
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        // projectView: "NEW_PROJECT",
        view: "NEW_PROJECT",
      };
    });
  }

  function handleCancelNewProject() {
    console.log(`handleCancelNewProject firing`);
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        // projectView: undefined,
        view: "LANDING",
      };
    });
  }

  function handleAddProject(newProjectData) {
    console.log(`handleAddProject firing`);
    const newProject = {
      ...newProjectData,
      id: new Date().valueOf(),
    };
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        // projectView: undefined,
        view: "LANDING",
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    console.log(`handleSelectProject firing`);
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
        projectView: "PROJECT_DETAILS",
        view: "PROJECT_DETAILS",
      };
    });
  }

  function handleDeleteProject() {
    console.log(`handleDeleteProject firing`);
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        // projectView: undefined,
        projectView: "LANDING",
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  function handleAddTask(text) {
    console.log(`handleAddTask firing`);
    setMasterProjects((prevState) => {
      const newTask = {
        task: text,
        projectId: prevState.selectedProjectId,
        id: new Date().valueOf(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleEditTask(text, editingTaskId) {
    console.log(`#/# CONTEX - handleEditTask firing and text = ${text} and editingTaskId`, editingTaskId);

    setMasterProjects((prevState) => {
      const index = prevState.tasks.findIndex((task) => task.id === editingTaskId);
      let updatedTasks = [...prevState.tasks];
      if (index !== -1) {
        updatedTasks[index].task = text;
      }
      return {
        ...prevState,
        tasks: [...updatedTasks],
      };
    });
  }

  function handleDeleteTask(id) {
    console.log(`handleDeleteTask firing`);
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleUpdateView(view) {
    console.log(`handleUpdateView firing with view = ${view}`);
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        view: view,
      };
    });
  }

  const ctxValue = {
    selectedProjectId: masterProjects.selectedProjectId,
    view: masterProjects.view,
    projectView: masterProjects.projectView,
    projects: masterProjects.projects,
    tasks: masterProjects.tasks,
    startNewProject: handleStartNewProject,
    cancelNewProject: handleCancelNewProject,
    addProject: handleAddProject,
    selectProject: handleSelectProject,
    deleteProject: handleDeleteProject,
    addTask: handleAddTask,
    editTask: handleEditTask,
    deleteTask: handleDeleteTask,
    updateView: handleUpdateView,
  };

  return <ProjectManagerContext.Provider value={ctxValue}>{children}</ProjectManagerContext.Provider>;
}
