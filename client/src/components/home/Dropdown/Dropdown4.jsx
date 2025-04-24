import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown4(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/men-western/${category}`);
    }
  };

  

  return (
       <>
      <div className={styles.item}>
      <select id="options" onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="Shirts">Shirts</option>
        <option value="T-Shirts">T-Shirts</option>
        <option value="Trousers">Trousers</option>
        <option value="Jeans">Jeans</option>
        <option value="Jackets">Jackets</option>
        <option value="Blazers">Blazers</option>
      </select>
    </div>
 </>
);
}

export default Dropdown4;

   


 

