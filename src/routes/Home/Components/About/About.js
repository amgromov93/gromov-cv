import styles from "../../../../sass/style.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <h3 className={styles.about__title}>About</h3>
      <p className={styles.about__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad expedita ullam, in sint perferendis numquam iure distinctio dolore minus, voluptatum nostrum molestias autem. Harum id distinctio expedita necessitatibus minima eligendi?</p>
    </div>
  )
}