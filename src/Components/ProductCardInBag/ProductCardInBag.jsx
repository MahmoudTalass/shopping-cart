import PropTypes from "prop-types";
import styles from "./ProductCardInBag.module.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function ProductCardInBag({ image, title, price, id, quantity }) {
   const [productCount, setProductCount] = useState(quantity);
   const { updateProductQuantity } = useOutletContext();

   function handleIncreaseCount() {
      if (productCount < 100) {
         setProductCount((prev) => prev + 1);
      }
   }

   function handleDecreaseCount() {
      if (productCount > 0) {
         setProductCount((prev) => prev - 1);
      }
   }

   return (
      <article className={styles.productCard}>
         <img src={image} alt={title} className={styles.productImage} />
         <div className={styles.productInfo}>
            <p>{title}</p>
            <p>Price: ${price}</p>
            <div className={styles.quantityAdjustment}>
               <button onClick={handleDecreaseCount} aria-label="decrement">
                  -
               </button>
               <p>quantity: {productCount}</p>
               <button onClick={handleIncreaseCount} aria-label="increment">
                  +
               </button>
            </div>
            {productCount != quantity && (
               <button
                  onClick={() => {
                     updateProductQuantity(id, productCount);
                  }}
               >
                  Submit change
               </button>
            )}
         </div>
      </article>
   );
}

ProductCardInBag.propTypes = {
   title: PropTypes.string,
   image: PropTypes.string,
   price: PropTypes.number,
   id: PropTypes.number,
   quantity: PropTypes.number,
};

export default ProductCardInBag;
