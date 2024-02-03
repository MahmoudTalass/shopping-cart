import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
   const router = createBrowserRouter([]);

   return <RouterProvider router={router} />;
}
