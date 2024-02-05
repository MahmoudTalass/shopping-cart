import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
   return (
      <nav className={styles.nav}>
         <Link to="/" className={styles.navLink}>
            Home
         </Link>
         <Link to="/shop" className={styles.navLink}>
            Shop
         </Link>
      </nav>
   );
}
