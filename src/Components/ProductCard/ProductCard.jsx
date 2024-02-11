import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

function ProductCard({ title, image, description, price }) {
   return (
      <div className={styles.productCard}>
         <img className={styles.productImage} src={image} alt={title} />
         <p className={styles.title}>{title}</p>
         <p className={styles.price}>${price}</p>
         <p className={styles.description}>{description}</p>
      </div>
   );
}

ProductCard.propTypes = {
   title: PropTypes.string,
   image: PropTypes.string,
   description: PropTypes.string,
   price: PropTypes.string,
};

export default ProductCard;
