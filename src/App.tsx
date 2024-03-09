import "./App.css";
import ContainerComponent from "./Pages/ContainerComponent";
import { Routes, Route } from "react-router-dom";
import CardContextProvider from "./Components/CardContext";
import ProjectPage from "./Pages/ProjectPage";

import PageNotFound from "./Pages/PageNotFound";

// const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
// const ContainerComponent = lazy(() => import("./Pages/ContainerComponent"));
// const ProjectPage = lazy(() => import("./Pages/ProjectPage"));

function App() {
  return (
    <CardContextProvider>
      {/*Navbar  */}

      <Routes>
        <Route path="/" element={<ContainerComponent />} />
        <Route path="/product/:Id" element={<ProjectPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CardContextProvider>
  );
}

export default App;
