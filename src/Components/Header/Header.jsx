import { Link } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";

export default function Header() {
   return (
      <header>
         <h1>Facet Muse</h1>
         <NavBar />
         <Link to={"/cart"}>Cart</Link>
      </header>
   );
}
