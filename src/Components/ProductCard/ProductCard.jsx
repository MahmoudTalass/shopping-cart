import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function ProductCard({ image, title, description, price, id }) {
   const [productCount, setProductCount] = useState(0);
   const { addToBag } = useOutletContext();

   function handleIncrementProductCount() {
      if (productCount < 100) {
         setProductCount((count) => count + 1);
      }
   }

   function handleDecrementProductCount() {
      if (productCount > 0) {
         setProductCount((count) => count - 1);
      }
   }

   return (
      <article className={styles.productCard}>
         <img className={styles.productImage} src={image} alt={title} />
         <p className={styles.title}>{title}</p>
         <p className={styles.price}>${price}</p>
         <p className={styles.description}>{description}</p>
         <div className={styles.addingProductToBagContainer}>
            <div className={styles.productCountAdjustmentsContainer}>
               <button
                  className={styles.incrementDecrementBtn}
                  aria-label="decrement"
                  onClick={handleDecrementProductCount}
               >
                  -
               </button>{" "}
               <input
                  className={styles.productCountInput}
                  type="number"
                  max={100}
                  value={productCount}
                  onChange={(e) => {
                     setProductCount(e.target.value);
                  }}
               />
               <button
                  className={styles.incrementDecrementBtn}
                  aria-label="increment"
                  onClick={handleIncrementProductCount}
               >
                  +
               </button>
            </div>
            <button
               onClick={() => {
                  addToBag({ image, title, description, price, id }, productCount);
                  setProductCount(0);
               }}
            >
               Add to bag
            </button>
         </div>
      </article>
   );
}

ProductCard.propTypes = {
   title: PropTypes.string,
   image: PropTypes.string,
   description: PropTypes.string,
   price: PropTypes.number,
   id: PropTypes.number,
};

export default ProductCard;
