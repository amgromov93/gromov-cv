import styles from "../../../../sass/style.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <h3 className={styles.about__title}>About</h3>
      <p className={styles.about__description}>I know the basics of layout using html, css and java script. I use CSS preprocessors, which, in conjunction with BEM, makes the code more readable and neat. As for programming in JS, I use a functional approach. I have experience in React development (ReactRouter, ReactHooks, Rest Api, Redux). Working with SVG graphics. Working with Figma and Photoshop. Completed Frontend courses at Hillel IT School.</p>
    </div>
  )
}