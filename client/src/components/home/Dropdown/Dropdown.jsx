import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown1(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/women-ethnics/${category}`);
    }
  };

  

  return (
       <>
      <div className={styles.item}>
      <select id="options" onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="Silk-Sarees">Silk Sarees</option>
        <option value="Banarasi-Silk-Sarees">Banarasi Silk Sarees</option>
        <option value="Cotton-Sarees">Cotton Sarees</option>
        <option value="Georgette-Sarees">Georgette Sarees</option>
        <option value="Net-Sarees">Net Sarees</option>
        <option value="Chiffon-Sarees">Chiffon Sarees</option>
      </select>
    </div>
 </>
);
}

export default Dropdown1;

   


 

