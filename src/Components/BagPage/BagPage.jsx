import { useOutletContext } from "react-router-dom";
import ProductCardInBag from "../ProductCardInBag/ProductCardInBag";
import style from "./BagPage.module.css";
import { Link } from "react-router-dom";

export default function BagPage() {
   const { bag } = useOutletContext();

   const isBagEmpty = Object.keys(bag).length === 0;

   return (
      <main className={style.bagContainer}>
         <div className={style.bagProductCardsContainer}>
            {isBagEmpty && (
               <p>
                  Your bag is empty! <Link to="/shop">Shop here</Link>
               </p>
            )}
            {Object.keys(bag).map((productId) => {
               return <ProductCardInBag key={productId} {...bag[productId]} />;
            })}
         </div>
      </main>
   );
}
