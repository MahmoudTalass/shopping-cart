import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ShopPage.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShopPage() {
   const [products, setProducts] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchProducts() {
         try {
            const response = await fetch(
               "https://fakestoreapi.com/products/category/jewelery",
               { cors: "cors" }
            );

            if (!response.ok) {
               throw new Error("Network Error Occured " + response.statusText);
            }
            const jsonData = await response.json();

            if (!ignore) {
               setProducts(jsonData);
               setLoading(false);
               setError(null);
            }
         } catch (error) {
            setProducts(null);
            setLoading(false);
            setError(error);
         }
      }

      let ignore = false;
      fetchProducts();
      return () => {
         ignore = true;
      };
   }, []);

   const { handleBagChanges } = useOutletContext();

   if (error) {
      return (
         <div>
            <h1>{error.message}</h1>
         </div>
      );
   }

   if (loading) return <p className={styles.loadingView}>Loading...</p>;

   return (
      <div className={styles.productsContainer}>
         {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
         })}
      </div>
   );
}
