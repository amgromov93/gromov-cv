import styles from "../../../../sass/style.module.scss";

export default function Language() {
  const languages = [
    {
      id: 1,
      title: 'Ukrainian',
      style: styles.language__level + ' ' + styles.language__level_ukrainian,
    },
    {
      id: 2,
      title: 'English',
      style: styles.language__level + ' ' + styles.language__level_english,
    },
    {
      id: 3,
      title: 'Deutsch',
      style: styles.language__level + ' ' + styles.language__level_deutsch,
    },
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.language__title}>Language</h3>
      <div>
        {languages.map(item => (
          <div key={item.id}>
            <p className={styles.language__text}>{item.title}</p>
            <p className={item.style}></p>
          </div>
        ))}
      </div>
    </div>
  )
}