import React from "react";
import ReactDOM from "react-dom/client";
import { ProjectContextProvider } from "./assets/contexts/ProjectContext";

import App from "./App";
import { SkillContextProvider } from "./assets/contexts/SkillContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <SkillContextProvider>
        <App />
      </SkillContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>
);
