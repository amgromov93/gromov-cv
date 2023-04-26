import { Link } from "react-router-dom";

import styles from "../../../../sass/style.module.scss";

import anarchyMotors from "../../../../img/anarchyMotors.webp";
import hlegal from "../../../../img/hlegal.webp";
import mntn from "../../../../img/mntn.webp";

export default function Projects() {
  const projects = [
    {
      id: 1,
      pic: <img className={styles.projects__pic} src={anarchyMotors} alt="anarchy-motors"/>,
      link: 'https://anarchy-motors.com.ua/',
    },
    {
      id: 2,
      pic: <img className={styles.projects__pic} src={hlegal} alt="anarchy-motors"/>,
      link: 'http://hlegal.resume-gromov.site/',
    },
    {
      id: 3,
      pic: <img className={styles.projects__pic} src={mntn} alt="anarchy-motors"/>,
      link: 'http://mntn.resume-gromov.site/',
    },
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.projects__title}>My projects</h3>
      {projects.map(item => (
        <Link to={item.link} key={item.id}>
          {item.pic}
        </Link>
      ))}
    </div>
  )
}