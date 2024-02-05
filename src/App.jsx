import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./pageLayout.css";
import { useState } from "react";

export default function App() {
   const [bag, setBag] = useState([]);

   function handleBagChanges(item) {
      setBag([...bag, item]);
   }

   return (
      <>
         <Header />
         <Outlet context={(bag, handleBagChanges)} />
         <Footer />
      </>
   );
}
