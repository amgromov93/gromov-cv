import styles from "../../../../sass/style.module.scss";

import levelEight from "../../../../img/level4i8.svg";
import levelFive from "../../../../img/level4i5.svg";
import levelThree from "../../../../img/level4i3.svg";

export default function Skills() {
  const skills = [
    {
      id: 1,
      img: <img src={levelEight} width={100} alt="levelHtml" />,
      text: 'HTML',
    },
    {
      id: 2,
      img: <img src={levelEight} width={100} alt="levelHtml" />,
      text: 'CSS',
    },
    {
      id: 3,
      img: <img src={levelThree} width={100} alt="levelHtml" />,
      text: 'JS',
    },
    {
      id: 4,
      img: <img src={levelFive} width={100} alt="levelHtml" />,
      text: 'React',
    },
  ]
  
  
  return (
    <div className={styles.container}>
      <h3 className={styles.skills__title}>My Skills</h3>
      <div className={styles.skills__box}>
        {skills.map(item => (
          <div className={styles.skills__item} key={item.id}>
            {item.img}
            <p className={styles.skills__item__text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}