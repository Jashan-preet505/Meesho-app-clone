import styles from "./Home.module.css";

function Page3(props) {
  return (
    <>
      <div className="container">
        <div className={styles.container0}>
          <h1>{props.text}</h1>
          <button>View More</button>
        </div>
        <div className={styles.container1}>
          <img src={props.image1} alt="" />
          <button>{props.text1}</button>
        </div>
        <div className={styles.container1}>
          <img src={props.image2} alt="" />
          <button>{props.text2}</button>
        </div>
        <div className={styles.container1}>
          <img src={props.image3} alt="" />
          <button>{props.text3}</button>
        </div>
      </div>
    </>
  );
}

export default Page3;
