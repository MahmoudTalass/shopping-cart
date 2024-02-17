import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./pageLayout.css";
import { useState } from "react";

export default function App() {
   const [bag, setBag] = useState({});

   function handleBagChanges(item) {
      if (item.id in bag) {
         setBag((prev) => ({
            ...prev,
            [item.id]: { ...prev[item.id], quantity: prev[item.id].quantity + 1 },
         }));
      } else {
         setBag({
            ...bag,
            [item.id]: { ...item },
         });
      }
   }

   let itemsCount = 0;

   for (let item in bag) {
      itemsCount += item.quantity;
   }

   return (
      <>
         <Header itemsCount={itemsCount} />
         <Outlet context={(bag, handleBagChanges)} />
         <Footer />
      </>
   );
}
