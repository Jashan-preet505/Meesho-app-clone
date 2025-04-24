import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown8(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/goods/${category}`);
    }
  };

  

  return (
       <>
      <div className={styles.item}>
      <select id="options" onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="Home Decor">Home Decor</option>
        <option value="Kitchen Tools">Kitchen Tools</option>
        <option value="Stationery">Stationery</option>
        <option value="Travel Accessories">Travel Accessories</option>
        <option value="Electronics Accessories">Electronics Accessories</option>
        <option value="Storage & Organizers">Storage & Organizers</option>
      </select>
    </div>
 </>
);
}

export default Dropdown8;

   


 

