import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown6(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/footwear/${category}`);
    }
  };

  

  return (
       <>
      <div className={styles.item}>
      <select id="options" onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="Sneakers">Sneakers</option>
        <option value="Formal Shoes">Formal Shoes</option>
        <option value="Sandals">Sandals</option>
        <option value="Flip-Flops">Flip-Flops</option>
        <option value="Sports Shoes">Sports Shoes</option>
        <option value="Boots">Boots</option>
    
      </select>
    </div>
 </>
);
}

export default Dropdown6;

   


 

