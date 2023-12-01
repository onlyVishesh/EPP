import React from "react";
import ReactDOM from "react-dom/client";
import { App} from "./App.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginBtns from "./component/LoginBtns";
import FacultyLoginForm from "./component/FacultyLoginForm";
import StudentLoginForm from "./component/StudentLoginForm";
import Sidebar from "./component/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <LoginBtns />,
      },
      {
        path: "/student-login",
        element: <StudentLoginForm />,
      },
      {
        path: "/faculty-login",
        element: <FacultyLoginForm />,
      },
      {
        path: "/student-home",
        element: <Sidebar />,
        children: [
          {
            path: "",
            element: <Dashboard/>,
          },
          {
            path: "event",
            element: <CreateEvent/>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
