import styles from "../../../../sass/style.module.scss";

import file from "../../../../files/текст.txt"

export default function DownloadCv() {
  const downloadCvClasses = styles.container + ' ' + styles.downloadCv;
  
  
  return (
    <div className={downloadCvClasses}>
      <h3 className={styles.downloadCv__title}>Interested in My Work</h3>
      <p className={styles.downloadCv__description}>Download My CV to know more about Me</p>
      <a className={styles.downloadCv__btn} href={file} download="GromovCV">Download CV</a>
    </div>
  )
}