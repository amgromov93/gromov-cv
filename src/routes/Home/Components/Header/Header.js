import { Link } from 'react-router-dom';

import styles from '../../../../sass/style.module.scss';
import logo from '../../../../img/logo.png';
import burger from '../../../../img/burger.svg';
import file from '../../../../files/текст.txt';

export default function Header() {
  const headerClasses = styles.container + ' ' + styles.header;

  return (
    <>
      <div className={headerClasses}>
        <div className={styles.header__box}>
          <img className={styles.header__box__logo} src={logo} alt="logo" width={100}/>
          <div className={styles.header__box__navBox}>
            <img className={styles.header__box__navBox__burger} src={burger} alt="menu" />
            <nav className={styles.header__box__navBox__menu}>
              <Link to={'/portfolio'}>Portfolio</Link>
              <Link to={'/contacts'}>Contacts</Link>
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