import React from "react";
import { useLocation } from "react-router-dom";
import productsData from "../productdata/Products.js";
import styles from "./searchResults.module.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get("q") || "";
  const lowerQuery = query.toLowerCase();

  const allProducts = [];
  Object.entries(productsData).forEach(([category, subcategories]) => {
    Object.entries(subcategories).forEach(([subcategory, items]) => {
      items.forEach((item) => {
        allProducts.push({
          ...item,
          category,
          subcategory,
        });
      });
    });
  });

  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(lowerQuery)
  );

  function addToCart(product) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('product added to cart successfully')
    
  }

  return (
    <div className={styles.searchResults}>
      {filtered.length > 0 ? (
        <div className={styles.searchResultsContainer}>
          <ul className={styles.searchContainer}>
            {filtered.map((product) => (
              <li key={product.id} className={styles.searchItems}>
                <img src={product.image} alt={product.name} width="240" />
                <strong>{product.name}</strong> {product.price}
                <br />
                <button
              className={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to cart{" "}
            </button>
              </li>
            ))}
           
          </ul>
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default SearchResults;
