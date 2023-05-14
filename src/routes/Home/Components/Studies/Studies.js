import { Link } from "react-router-dom";

import styles from "../../../../sass/style.module.scss";

import icon from "../../../../img/studieIcon.svg";

export default function Studies() {
  const studiesClasses = styles.container + ' ' + styles.studies;
  const modClasses = styles.studies__item + ' ' + styles.studies__item_mb0;

  const studies = [
    {
      id: 1,
      title: 'HILLEL IT School (HTML, CSS)',
      description: 'Mar - Jun 2022',
      link: 'https://certificate.ithillel.ua/view/70137320',
      style: styles.studies__item,
    },
    {
      id: 2,
      title: 'HILLEL IT School (JS, React)',
      description: 'Sep - Jan 2022',
      link: 'https://certificate.ithillel.ua/view/79018382',
      style: modClasses,
    },
  ]

  return (
    <div className={studiesClasses}>
      <h3 className={styles.studies__title}>Studies</h3>
      <div className={styles.studies__box}>
        {studies.map(item => (
          <Link to={item.link} key={item.id}>
            <div className={item.style}> 
              <img className={styles.studies__item__icon} src={icon} alt="study"/>
              <p className={styles.studies__item__title}>{item.title}</p>
              <p className={styles.studies__item__description}>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}