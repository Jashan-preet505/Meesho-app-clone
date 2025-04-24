
import { useNavigate } from 'react-router-dom';
import styles from '../../header/Header.module.css';

function Dropdown2(props) {
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const category = e.target.value;
    if (category) {
      navigate(`/women-western/${category}`);
    }
  };
  
  return (
       <>
      <div className={styles.item}>
      <select id="options"  onChange={handleChange}>
        <option value="">{props.text}</option>
        <option value="Dresses">Dresses</option>
        <option value="Tshirts">Tshirts</option>
        <option value="Top">Top</option>
        <option value="Jeans">Jeans</option>
        <option value="Plazzos">Plazzos</option>
        <option value="Skirts">Skirts</option>
      </select>
    </div>
 </>
);
}

export default Dropdown2;

   


 

