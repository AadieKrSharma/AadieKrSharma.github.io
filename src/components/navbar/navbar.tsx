import React, { useState } from 'react'
import styles from "./navbar.module.css";
import * as data from './nav.links.json';
import pageLogo from "../../assets/channel watermark.png";
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


const FloatingMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = ()=>{
    setIsActive(current => !current);
  }
  return (
    <>
      <div className={isActive ? `${styles['floatingMenu']}`:`${styles['hideMenu']}`}>
        <Links links={links} />
      </div>
    </>
  );
}

const Navbar: React.FC = () => {
  const pageName = process.env.OWNER_NAME?.split(" ")[0];
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles['logo-container']}>
          <img src={pageLogo} className={styles['pageLogo']} />
          <span className={styles['shortName']}>{pageName}</span>
          <span className={styles['longName']}>{process.env.OWNER_NAME}</span>
        </div>
        <Links links={links} />
      </nav>
      <FloatingMenu />
    </>
  )
}

export default Navbar