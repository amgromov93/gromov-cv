import styles from "../../../../sass/style.module.scss";

export default function Language() {
  const languagesClasses = styles.container + ' ' + styles.languages;

  const languages = [
    {
      id: 1,
      title: 'Ukrainian',
      style: styles.languages__level + ' ' + styles.languages__level_ukrainian,
    },
    {
      id: 2,
      title: 'English',
      style: styles.languages__level + ' ' + styles.languages__level_english,
    },
    {
      id: 3,
      title: 'Deutsch',
      style: styles.languages__level + ' ' + styles.languages__level_deutsch,
    },
  ]

  return (
    <div className={languagesClasses}>
      <h3 className={styles.languages__title}>Language</h3>
      <div>
        {languages.map(item => (
          <div key={item.id}>
            <p className={styles.languages__text}>{item.title}</p>
            <p className={item.style}></p>
          </div>
        ))}
      </div>
    </div>
  )
}