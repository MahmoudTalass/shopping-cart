import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./pageLayout.css";
import { useState } from "react";

export default function App() {
   const [bag, setBag] = useState({});

   function updateProductQuantity(productId, quantityInput) {
      let product = bag[productId];
      quantityInput = Number(quantityInput);

      setBag({
         ...bag,
         [productId]: { ...product, quantity: quantityInput },
      });
   }

   function addToBag(productId, quantityInput) {
      let product = bag[productId];
      quantityInput = Number(quantityInput);

      if (productId in bag) {
         setBag({
            ...bag,
            [productId]: { ...product, quantity: product.quantity + quantityInput },
         });
      } else {
         setBag({
            ...bag,
            [productId]: { ...product, quantity: quantityInput },
         });
      }
   }

   let productsCount = 0;

   for (let product in bag) {
      productsCount += bag[product].quantity;
   }

   return (
      <>
         <Header productsCount={productsCount} />
         <Outlet context={{ addToBag, bag }} />
         <Footer />
      </>
   );
}
