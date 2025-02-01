import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import PlayMovie from "./PlayMovie";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/watch/:id",
      element: <PlayMovie />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
