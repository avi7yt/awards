import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Login from "./pages/Login"
import  Task from "./pages/Task"
import  Profile from "./pages/Profile"
import  Home from "./pages/Home"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    
    {
      path: "/profile",
      element: <Profile/>,
    },

    {
      path: "/task",
      element: <Task/>,
    },

      {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return (
  <div>
      <RouterProvider router={router} />
  </div>
  )
};

export default App;
