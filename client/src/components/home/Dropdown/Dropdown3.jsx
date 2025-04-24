import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown3(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/men-ethnics/${category}`);
    }
  };

  return (
       <>
      <div className={styles.item}>
      <select id="options" onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="Kurtas">Kurtas</option>
        <option value="Sherwanis">Sherwanis</option>
        <option value="Nehru-Jackets">Nehru Jackets</option>
        <option value="Ethnic-Sets">Ethnic Sets</option>
        <option value="Dhoti-Kurta">Dhoti Kurta</option>
        <option value="Pathani-Suits">Pathani Suits</option>
      </select>
    </div>
 </>
);
}

export default Dropdown3;

   


 

