import React from 'react'
import { useState } from 'react';
import styles from './Akordeon.module.css'
const Akordeon = ({ title, contents }) => {
    const [Accordion, setAccordion] = useState(false);

    return (
        <div className={styles.div}> 
        
            <button className={styles.button} onClick={() => setAccordion(!Accordion)}>{title}<span>{Accordion ? "-" :"+"}</span></button>
            <div className={styles.paragrapg}>{Accordion ? contents : ""}</div>
        </div>

    )
}

export default Akordeon