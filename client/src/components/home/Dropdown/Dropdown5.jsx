import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown5(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/children-clothes/${category}`);
    }
  };

  

  return (
       <>
      <div className={styles.item}>
      <select id="options" onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="T-Shirts">T-Shirts</option>
        <option value="Shorts"> Shorts</option>
        <option value="Frocks"> Frocks</option>
        <option value="Jeans">Jeans</option>
        <option value="Jackets">Jackets</option>
        <option value="Ethnic-Wear">Ethnic Wear</option>
    
      </select>
    </div>
 </>
);
}

export default Dropdown5;

   


 

