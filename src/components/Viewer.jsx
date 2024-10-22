import { useContext } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import LandingScreen from "./LandingScreen";
import ProjectDetails from "./ProjectDetails";
import NewProject from "./NewProject";

export default function Viewer() {
  const { view } = useContext(ProjectManagerContext);
  const showView = view === "NEW_PROJECT" ? <NewProject /> : view === "PROJECT_DETAILS" ? <ProjectDetails /> : view === "LANDING" ? <LandingScreen /> : <LandingScreen />;

  return <main className="content w-[35rem]">{showView}</main>;
}
