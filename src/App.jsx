import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./index.css"; // Import Tailwind CSS
import Sidebar from "./Components/Sidebar";
import Question from "./Pages/Question";
import LoginForm from "./Pages/LoginForm";
import Footer from "./Components/Footer";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [{ path: "/", element: <Question /> }],
  },
  {
    path: "/questionnaire",
    element: <Dashboard />,
    children: [{ path: "/questionnaire", element: <Question /> }],
  },
  {
    path: "/login",
    element: <Dashboard />,
    children: [{ path: "/login", element: <LoginForm /> }],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
