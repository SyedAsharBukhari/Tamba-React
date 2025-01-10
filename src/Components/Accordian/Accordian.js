import React, { useState } from 'react';
import styles from './Accordian.module.css';

const Accordion = ({text1, text2}) => {
  const [expanded, setExpanded] = useState(null);

  const togglePanel = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.panel} aria-expanded={expanded === 0} onClick={() => togglePanel(0)}>
        <button className={styles.panelLabel}>
         {text1}
        </button>
        <div className={`${styles.panelInner} ${expanded === 0 ? styles.expanded : ''}`}>
          <div className={styles.panelContent}>
        {text2}
          </div>
        </div>
      </div>
      </div>
  )
}

export default Accordion;
