import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "skills",
        element: <Skills/>
    },
    {
        path: "projects",
        element: <Projects/>
    }
]);