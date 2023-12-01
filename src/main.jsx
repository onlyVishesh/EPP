import React from "react";
import ReactDOM from "react-dom/client";
import { App} from "./App.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginBtns from "./component/LoginBtns";
import FacultyLoginForm from "./component/FacultyLoginForm";
import StudentLoginForm from "./component/StudentLoginForm";
import Dashboard from "./pages/Dashboard.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Member from "./pages/Member.jsx";
import StudentSidebar from "./component/StudentSidebar.jsx";
import FacultySidebar from "./component/FacultySidebar.jsx";
import Profile from "./pages/Profile.jsx";

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
        element: <StudentSidebar />,
        children: [
          {
            path: "",
            element: <Dashboard/>,
          },
          {
            path: "event",
            element: <CreateEvent/>,
          },
          {
            path: "profile",
            element: <Profile/>,
          },
        ],
      },
      {
        path: "/faculty-home",
        element: <FacultySidebar />,
        children: [
          {
            path: "",
            element: <Dashboard/>,
          },
          {
            path: "event",
            element: <CreateEvent/>,
          },
          {
            path: "member",
            element: <Member/>,
          },
          {
            path: "profile",
            element: <Profile/>,
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
