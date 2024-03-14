import { useOutletContext } from "react-router-dom";
import ProductCardInBag from "../ProductCardInBag/ProductCardInBag";
import style from "./BagPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BagPage() {
   const { bag, clearBag } = useOutletContext();
   const [showAlert, setShowAlert] = useState(false);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setShowAlert(false);
      }, 6000);
      return () => clearTimeout(timeoutId);
   }, [showAlert]);

   const isBagEmpty = Object.keys(bag).length === 0;
   let total = 0;

   return (
      <main className={style.bagContainer}>
         {showAlert && <p className={style.purchaseSuccessAlert}>Success</p>}
         <div className={style.bagProductCardsContainer}>
            {isBagEmpty && (
               <p>
                  Your bag is empty! <Link to="/shop">Shop here</Link>
               </p>
            )}
            {Object.keys(bag).map((productId) => {
               total += bag[productId].quantity * bag[productId].price;
               return <ProductCardInBag key={productId} {...bag[productId]} />;
            })}
         </div>
         {!isBagEmpty && (
            <div className={style.checkoutContainer}>
               <p>Total: ${total}</p>
               <button
                  onClick={() => {
                     setShowAlert(true);
                     clearBag();
                  }}
               >
                  Checkout
               </button>
            </div>
         )}
      </main>
   );
}
