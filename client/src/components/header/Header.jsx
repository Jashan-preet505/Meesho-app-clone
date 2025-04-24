import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../Cart/Cart.jsx'
import { FaUser } from "react-icons/fa";
import Home from "../home/Home.jsx";
import Login from "../login/Login.jsx";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Dropdown1 from "../home/Dropdown/Dropdown.jsx";
import Dropdown2 from "../home/Dropdown/Dropdown2.jsx";
import Dropdown3 from '../home/Dropdown/Dropdown3.jsx';
import Dropdown4 from '../home/Dropdown/Dropdown4.jsx';
import Dropdown5 from '../home/Dropdown/Dropdown5.jsx';
import Dropdown6 from '../home/Dropdown/Dropdown6.jsx';
import Dropdown7 from '../home/Dropdown/Dropdown7.jsx';
import Dropdown8 from '../home/Dropdown/Dropdown8.jsx';
import ProductPage from "../home/Products/Products.jsx";
import styles from "./Header.module.css";
import RegisterForm from "../login/Register.jsx";

const Header = ({searchTerm, setSearchTerm}) => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <div id="div1">
              <h1>meesho</h1>
              <input
          type="text"
          placeholder="Search any product...."
          id="inputbox"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
              <div className={styles.search_icon}>
                <BsSearch fontSize="24px" />{" "}
              </div>
            </div>

            <div id="div2" className={styles.right_nav}>
              <div className='styles.download'>
              <a 
                 href="https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en-US" 
                 target="_blank" 
                 rel="noopener noreferrer"
                  className={styles.link1}>
                    <MdOutlinePhoneAndroid fontSize="28px" /> Download App
                  </a>
              </div>
              <div>
                <div>
                  <Link to="/Cart" className={styles.link}>
                    Cart
                    <FaShoppingCart fontSize="22px" />
                  </Link>
                </div>
                <div>
                  <Link to="/register" className={styles.link}>
                    Profile
                    <FaUser fontSize="22px" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div id="nav-bottom" className={styles.header}>
            <div className={styles.content}>
              <Dropdown1 text="Women Ethnics" />
              <Dropdown2 text="Women Western" />
              <Dropdown3 text="Men Ethnics" />
              <Dropdown4 text="Men Western" />
              <Dropdown5 text="Children Clothes" />
              <Dropdown6 text="Footwear" />
              <Dropdown7 text="Accessories" />
              <Dropdown8 text="others" />
            </div>
          </div>
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* Example: http://localhost:3000/category/tshirts */}
          <Route path="/:category/:subcategory" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Header;
