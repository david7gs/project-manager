import React from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectManagerContextProvider from "./store/project_manager_contex";
import Viewer from "./components/Viewer";
import Footer from "./components/Footer";

function App() {
  return (
    <ProjectManagerContextProvider>
      {/* <div className="page-wrap">
        <div className="h-screen my-8 flex gap-8">
          <ProjectsSidebar />
          <Viewer />
        </div>
        <Footer />
      </div> */}
      <div className="page-wrap h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        <Viewer />
      </div>
      <Footer />
    </ProjectManagerContextProvider>
  );
}

export default App;
