import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown7(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/accessories/${category}`);
    }
  };

  

  return (
       <>
      <div className={styles.item}>
      <select id="options" onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="Caps & Hats">Caps & Hats</option>
        <option value="Sunglasses">Sunglasses</option>
        <option value="Watches">Watches</option>
        <option value="Belts">Belts</option>
        <option value="Bags & Wallets">Bags & Wallets</option>
        <option value="Jewelry">Jewelry</option>
      </select>
    </div>
 </>
);
}

export default Dropdown7;

   


 

