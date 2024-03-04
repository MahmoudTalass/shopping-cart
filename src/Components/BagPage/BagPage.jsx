import { useOutletContext } from "react-router-dom";
import ProductCardInBag from "../ProductCardInBag/ProductCardInBag";
import style from "./BagPage.module.css";

export default function BagPage() {
   const { bag } = useOutletContext();

   return (
      <main className={style.bagContainer}>
         {Object.keys(bag).map((productId) => {
            return <ProductCardInBag key={productId} {...bag[productId]} />;
         })}
      </main>
   );
}
