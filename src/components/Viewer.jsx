import { useContext } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import LandingScreen from "./LandingScreen";
import ProjectDetails from "./ProjectDetails";
import NewProject from "./NewProject";

export default function Viewer() {
  const { view, projectView } = useContext(ProjectManagerContext);

  let showView = <LandingScreen />;
  if (projectView === "NEW_PROJECT") {
    showView = <NewProject />;
  }
  if (projectView === "PROJECT_DETAILS") {
    showView = <ProjectDetails />;
  }

  return <main className="content w-[35rem]">{showView}</main>;
}
