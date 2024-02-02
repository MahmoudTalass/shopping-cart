import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Router() {
   const router = createBrowserRouter([]);

   return <RouterProvider router={router} />;
}
