import React from "react";

import image from "/images/img1.webp";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { IoMdDownload } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import Page3 from "./Page3.jsx";
import styles from "./Home.module.css";
import pic1 from "/images/0.webp";
import pic2 from "/images/00.webp";
import pic3 from "/images/1.webp";
import pic4 from "/images/2.webp";
import pic5 from "/images/11.webp";
import pic6 from "/images/20.webp";
import pic7 from "/images/21.webp";
import pic8 from "/images/22.webp";
import pic9 from "/images/23.webp";
import { useState, useEffect } from "react";
import ProductList from "../header/ProductList.jsx";

const Home = ({searchTerm}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Products.js')
    .then(res => res.text())  // Just get plain text first
    .then(text => {
      try {
        const data = JSON.parse(text);
        console.log(data);
      } catch (err) {
        console.error('Not valid JSON:', text);
      }
    });
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const isSearching = (searchTerm || "").trim().length > 0;

  return (
    <>
      {isSearching ? (
    <>
    <h2>Search Results</h2>
    <ProductList products={filteredProducts} />
  </>
) : (
<>
      <section>
       
        <div className="left">
          <h1>
            Lowest prices <br /> Best Quality Shopping
          </h1>
          <div className="bottom">
            <h3> Cash on Delivery</h3>
            <h3>
              Fast dlivery <TbTruckDelivery />
            </h3>
            <h3>
              Easy Return <GiReturnArrow />
            </h3>
          </div>
            <div className={styles.download}>
          <a 
          href='https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en-US'
          target="_blank"
          rel="noopener noreferrer" 
          className={styles.link}>
              <IoMdDownload className={styles.icon}/>
              Download the meesho app
            </a>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="picture" />
        </div>
      </section>
      <h2> Top Categories to choose from </h2>
      <div className={styles.page2}>
        <div className={styles.container}>
          <div className={styles.left}>
            <img src={pic1} alt="" />
          </div>
          <div className={styles.right}>
            <h1>Be fashion forward</h1>
            <div className={styles.right1}>
              <img src={pic2} alt="" />
              <img src={pic3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="page3">
        <Page3
          text={"Essentials"}
          image1={pic4}
          image2={pic5}
          image3={pic6}
          text1={"Home Decor"}
          text2={"Kitchen"}
          text3={"Health Care"}
        />
        <Page3
          text={"New Styles"}
          image1={pic7}
          image2={pic8}
          image3={pic9}
          text1={"Accessories"}
          text2={"Footwear"}
          text3={"Electronics"}
        />
      </div>
      <div className="main1">
        <div className="page4">
          <h2>Register as a Meesho Supplier</h2>
          <h3>Sell your products to crores of customers at 0% commission</h3>
          <div>
            <h3>
              {" "}
              <TiTick fontSize="30px" text />
              Grow your business 10x
            </h3>
            <h3 id='h3'>
              {" "}
              <TiTick fontSize="30px" />
              Enjoy 100% Profit
            </h3>
            <h3>
              {" "}
              <TiTick fontSize="30px" />
              Sell All Over India
            </h3>
          </div>
          <button>Sign up now</button>
        </div>
      </div>
     </>
)} 
    </>
  );
};

export default Home;
