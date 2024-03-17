import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
   return (
      <main className={styles.homePage}>
         <section className={styles.brandInfoContainer}>
            <img src="/jewelry-photo.jpeg" alt="jewelry" />
            <p className={styles.brandInfoText}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore et nihil qui
               non, commodi esse, suscipit veniam totam distinctio atque! Quod eius, architecto
               fugiat expedita error in incidunt cum itaque ipsam labore maxime alias officiis
               laboriosam qui ea voluptate? Provident iusto amet ut quisquam maxime nam commodi
               nesciunt aspernatur ipsa. Unde voluptas reiciendis officia cupiditate, porro in
               minima, sequi iure numquam consequuntur dolorum quam natus quidem facere maxime
               doloribus saepe quaerat doloremque ipsa ad, velit quibusdam odio. Quam ut ipsam,
               facilis ipsa illum modi vel? Culpa at provident placeat itaque, dolores voluptatum,
               sit rerum, consectetur reprehenderit vel magnam totam!
            </p>
         </section>
         <Link to="/shop" className={styles.shopBtn}>
            Shop
         </Link>
      </main>
   );
}
