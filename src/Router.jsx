import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/Homepage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import CartPage from "./Components/CartPage/CartPage";
import Error from "./Components/Error/Error";

export default function Router() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <App />,
         errorElement: <Error />,
         children: [
            { index: true, path: "home", element: <HomePage /> },
            {
               path: "shop",
               element: <ShopPage />,
            },
            {
               path: "cart",
               element: <CartPage />,
            },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}
