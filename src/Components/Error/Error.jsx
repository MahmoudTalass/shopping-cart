import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
   return (
      <div className={styles.errorContainer}>
         <h1>Page not found!</h1>
         <Link to="/">Return home</Link>
      </div>
   );
}
