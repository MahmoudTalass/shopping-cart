import { Link } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

function Header({ productsCount }) {
   return (
      <header className={styles.header}>
         <div className={styles.topOfHeader}>
            <h1>Facet Muse</h1>
            <Link to={"/bag"} className={styles.bagBtn}>
               {productsCount} Bag
            </Link>
         </div>

         <NavBar />
      </header>
   );
}

Header.propTypes = {
   productsCount: PropTypes.number,
};

export default Header;
