import React, { useState } from 'react'
import styles from "./navbar.module.css";
import * as data from './nav.links.json';
import pageLogo from "../../assets/channel watermark.png";
import {FaBars, FaXmark} from "react-icons/fa6" 
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
}



const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <>
      <div className={`${styles['links-container']}`}>
        {links.map((link: Link) => {
          return (
            <div key={link.href} className={styles['link']}>
              <a href={link.href}>{link.label}</a>
            </div>
          )
        })}
      </div>
    </>
  );
}


const FloatingMenu: React.FC<{active:boolean}> = ({active}) => {
  return (
    <>
      <div className={active ? `${styles['floatingMenu']}` : `${styles['hideMenu']}`}>
        <Links links={links} />
      </div>
    </>
  );
}

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const pageName = process.env.OWNER_NAME?.split(" ")[0];
  return (
    <>
      <nav className={`shadow-xl ${styles.navBar}`}>
        <div className={styles['logo-container']}>
          <img src={pageLogo} className={styles['pageLogo']} />
          <span className={styles['shortName']}>{pageName}</span>
          <span className={styles['longName']}>{process.env.OWNER_NAME}</span>
        </div>
        <Links links={links} />
        <div>
          <button className={styles['toggleButton']} onClick={()=>setIsActive(current => !current)}>{!isActive?<FaBars/>:<FaXmark/>}</button>
        </div>
      </nav>
      <FloatingMenu active={isActive}/>
    </>
  )
}

export default Navbar