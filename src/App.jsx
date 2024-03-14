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

      if (quantityInput == 0) {
         removeFromBag(productId);
      } else {
         setBag({
            ...bag,
            [productId]: { ...product, quantity: quantityInput },
         });
      }
   }

   function removeFromBag(productId) {
      // eslint-disable-next-line no-unused-vars
      const { [productId]: _, ...rest } = bag;

      setBag(rest);
   }

   function addToBag(product, quantityInput) {
      quantityInput = Number(quantityInput);

      if (product.id in bag) {
         let currentQuantity = bag[product.id].quantity;

         setBag({
            ...bag,
            [product.id]: { ...product, quantity: currentQuantity + quantityInput },
         });
      } else {
         setBag({
            ...bag,
            [product.id]: { ...product, quantity: quantityInput },
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
         <Outlet context={{ addToBag, bag, updateProductQuantity }} />
         <Footer />
      </>
   );
}
