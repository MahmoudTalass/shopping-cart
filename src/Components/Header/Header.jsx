import { Link } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

function Header({ itemsCount }) {
   return (
      <header className={styles.header}>
         <div className={styles.topOfHeader}>
            <h1>Facet Muse</h1>
            <Link to={"/bag"} className={styles.bagBtn}>
               {itemsCount} Bag
            </Link>
         </div>

         <NavBar />
      </header>
   );
}

Header.propTypes = {
   itemsCount: PropTypes.number,
};

export default Header;
