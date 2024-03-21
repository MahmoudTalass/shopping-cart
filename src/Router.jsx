import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import BagPage from "./Components/BagPage/BagPage";
import Error from "./Components/Error/Error";

export default function Router() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <App />,
         errorElement: <Error />,
         children: [
            { index: true, element: <HomePage /> },
            {
               path: "shop",
               element: <ShopPage />,
            },
            {
               path: "bag",
               element: <BagPage />,
            },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}
