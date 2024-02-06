import { Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
   const error = useRouteError();

   return (
      <div className={styles.errorContainer}>
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occured</p>
         <p>{error.statusText || error.message}</p>
         <Link to="/">Return home</Link>
      </div>
   );
}
