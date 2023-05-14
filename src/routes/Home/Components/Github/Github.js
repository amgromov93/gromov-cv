import { Link } from "react-router-dom";
import styles from "../../../../sass/style.module.scss";

export default function Github() {
  const gitClasses = styles.container + ' ' + styles.gitHub;

  return (
    <div className={gitClasses}>
      <h3 className={styles.github__title}>Github</h3>
      <div className={styles.github__linkBox}>
        <Link className={styles.github__link} to={'https://github.com/amgromov93'} >Profile GITHUB</Link>
      </div>
    </div>
  )
}