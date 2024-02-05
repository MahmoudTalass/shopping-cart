import { Link } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";
import styles from "./Header.module.css";

export default function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.topOfHeader}>
            <h1>Facet Muse</h1>
            <Link to={"/bag"} className={styles.bagBtn}>
               Bag
            </Link>
         </div>

         <NavBar />
      </header>
   );
}
