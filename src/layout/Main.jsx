import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


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
    },
    {
        path: "contact",
        element: <Contact/>
    },
    {
        path: "*",
        element: <div>Error ...</div>
    }
]);