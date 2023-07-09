import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Programs from "../pages/Programs";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "contact",
    element: <Contact />,
    title: "Contact Us"
  },
  {
    path: "programs",
    element: <Programs />,
    title: "Programs"
  },
  {
    path: "register",
    element: <Register />,
    title: "Register"
  },
  {
    path: "*",
    element: <Home />,
    title: "home"
  }
];

export default pagesData;
