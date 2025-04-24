import React from 'react'
import styles from './Button.module.css';

function Button(props) {
  return (
    <>
    <div>
        <button className={styles.btn}>{props.text} {props.icon}</button>
    </div>
    </>
  )
}

export default Button;