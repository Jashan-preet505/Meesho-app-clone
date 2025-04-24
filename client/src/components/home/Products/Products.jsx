import {useParams} from "react-router-dom";
import products from "../../productdata/Products.js";
import styles from './Products.module.css';

function ProductPage() {
  const { category, subcategory} = useParams();
  const categoryProducts = products[category]?.[subcategory] || [];
  console.log(categoryProducts);

  if (!categoryProducts) {
    return <h2>No products found for this category</h2>;
  }

  function addToCart(product) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('product added to cart successfully')
    
  }
  return (
    <div className={styles.productPage}>
      <h2>{subcategory.replace('-', ' ')}</h2>
      <div className={styles.productCard}>
        {categoryProducts.map((product) => 
          <div
            key={product.id} className={styles.productItem}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className={styles.buttonContainer}>
            <button className={styles.button2} onClick={()=> addToCart(product)}>Add to cart </button>
            </div>
          
        </div>
      )} 
    </div>
    </div>
  );
}

export default ProductPage;
