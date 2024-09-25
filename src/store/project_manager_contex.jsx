import { useState, createContext } from "react";

export const ProjectManagerContext = createContext({
  selectedProjectId: "",
  view: "",
  projects: [],
  tasks: [],
  startNewProject: () => {},
  cancelNewProject: () => {},
  addProject: () => {},
  selectProject: () => {},
  editProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  editTask: () => {},
  deleteTask: () => {},
  updateView: () => {},
});

export default function ProjectManagerContextProvider({ children }) {
  const [masterProjects, setMasterProjects] = useState({
    selectedProjectId: undefined,
    view: "LANDING",
    projects: [],
    tasks: [],
  });

  function handleStartNewProject() {
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        view: "NEW_PROJECT",
      };
    });
  }

  function handleCancelNewProject() {
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        view: "LANDING",
      };
    });
  }

  function handleAddProject(newProjectData) {
    const newProject = {
      ...newProjectData,
      id: new Date().valueOf(),
    };
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        view: "LANDING",
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
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
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projectView: "LANDING",
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  function handleEditProjectField(text, field) {
    setMasterProjects((prevState) => {
      const index = prevState.projects.findIndex((project) => project.id === prevState.selectedProjectId);
      let updatedProjects = [...prevState.projects];
      if (index !== -1) {
        updatedProjects[index][field] = text;
      }
      return { ...prevState, projects: [...updatedProjects] };
    });
  }

  function handleAddTask(text) {
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
    setMasterProjects((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleUpdateView(view) {
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
    editProject: handleEditProjectField,
    deleteProject: handleDeleteProject,
    addTask: handleAddTask,
    editTask: handleEditTask,
    deleteTask: handleDeleteTask,
    updateView: handleUpdateView,
  };

  return <ProjectManagerContext.Provider value={ctxValue}>{children}</ProjectManagerContext.Provider>;
}
