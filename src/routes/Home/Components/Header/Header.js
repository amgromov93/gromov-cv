import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../../../sass/style.module.scss';
import logo from '../../../../img/logo.png';
import file from '../../../../files/текст.txt';

export default function Header() {
  const [menu, setMenu] = useState(false);

  const headerClasses = styles.container + ' ' + styles.header;

  return (
    <>
      <div className={headerClasses}>
        <div className={styles.header__box}>
          <img className={styles.header__box__logo} src={logo} alt="logo" width={100}/>
          <div className={styles.header__box__navBox}>
            <button onClick={() => setMenu(!menu)} className={!menu ? styles.header__box__navBox__burger : styles.header__box__navBox__burger_fixed}></button>
            <nav className={menu ? styles.header__box__navBox__menu : styles.header__box__navBox__menu_close}>
              <Link className={styles.header__box__navBox__link} to={'/'}>To main</Link>
              <Link className={styles.header__box__navBox__link} to={'/portfolio'}>Portfolio</Link>
              <Link className={styles.header__box__navBox__link} to={'/contacts'}>Contacts</Link>
            </nav>
          </div>
        </div>
        <div className={styles.header__photo}></div>
        <div className={styles.header__textBlock}>
          <p className={styles.header__textBlock__greetings}>Welcome</p>
          <h1 className={styles.header__textBlock__name}>I’m Oleksii Gromov</h1>
          <h2 className={styles.header__textBlock__jobTitle}>Front-end developer</h2>
          <a className={styles.header__textBlock__cvBtn} href={file} download="GromovCV">Download CV</a>
        </div>
      </div>
    </>
  )
}