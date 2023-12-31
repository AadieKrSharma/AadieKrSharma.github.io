import React from 'react'
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles['logo-container']}>
        {/* <span>{process.env.OWNER_NAME}</span> */}
        <span>Logo</span>
      </div>
    </nav>
  )
}

export default Navbar