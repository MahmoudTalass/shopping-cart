import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./pageLayout.css";
import { useState } from "react";

export default function App() {
   const [bag, setBag] = useState({});

   function handleAdjustingBag(item, quantityInput) {
      quantityInput = Number(quantityInput);

      if (item.id in bag) {
         setBag({
            ...bag,
            [item.id]: { ...item, quantity: bag[item.id].quantity + quantityInput },
         });
      } else {
         setBag({
            ...bag,
            [item.id]: { ...item, quantity: quantityInput },
         });
      }
   }

   let itemsCount = 0;

   for (let item in bag) {
      itemsCount += bag[item].quantity;
   }

   return (
      <>
         <Header itemsCount={itemsCount} />
         <Outlet context={{ handleAdjustingBag, bag }} />
         <Footer />
      </>
   );
}
