import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

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
               throw new Error(response.statusText);
            }
            const jsonData = await response.json();

            if (!ignore) {
               setProducts(jsonData);
            }
         } catch (error) {
            setProducts(null);
            setError(error);
         } finally {
            setLoading(false);
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
            <h1>Network error</h1>
            <p>{error.message}</p>
         </div>
      );
   }

   if (loading) return <p>Loading...</p>;

   return (
      <div>
         {products.map((product) => {
            return product.title;
         })}
      </div>
   );
}
