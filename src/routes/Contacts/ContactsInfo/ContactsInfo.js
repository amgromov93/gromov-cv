import styles from "../../../sass/style.module.scss";

export default function ContactsInfo() {
  const contacts = [
    {
      id: 1,
      icon: <svg width="20" height="20" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.9157 7.33335C3.36086 7.33839 0.662949 4.60814 0.666752 1.0844C0.666752 0.854281 0.8533 0.666687 1.08342 0.666687H2.18315C2.38964 0.666687 2.56505 0.818408 2.59537 1.02266C2.66804 1.51219 2.81057 1.98876 3.01862 2.43781L3.06143 2.53023C3.12097 2.65873 3.08061 2.81141 2.96536 2.89372C2.62479 3.13693 2.49463 3.6265 2.75995 4.0085C3.09291 4.48787 3.5126 4.90748 3.99186 5.24028C4.37384 5.50553 4.86333 5.37539 5.10654 5.03487C5.1889 4.91956 5.34167 4.87919 5.47025 4.93875L5.56224 4.98136C6.01133 5.18939 6.48793 5.33193 6.97751 5.40458C7.18177 5.4349 7.33341 5.6103 7.33341 5.8168V6.91668C7.33341 7.1468 7.14641 7.33335 6.91629 7.33334L6.9157 7.33335Z" fill="#E2E6EE"/>
            </svg>,
      title: 'Phone number',
      description: '+380737070737',
      href: "tel:+380737070737",
    },
    {
      id: 2,
      icon: <svg width="20" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33325 7.33335H1.66659C1.20635 7.33335 0.833252 6.96026 0.833252 6.50002V1.46377C0.852672 1.01775 1.22014 0.666265 1.66659 0.666687H8.33325C8.79349 0.666687 9.16659 1.03978 9.16659 1.50002V6.50002C9.16659 6.96026 8.79349 7.33335 8.33325 7.33335ZM1.66659 2.27835V6.50002H8.33325V2.27835L4.99992 4.50002L1.66659 2.27835ZM1.99992 1.50002L4.99992 3.50002L7.99992 1.50002H1.99992Z" fill="#E2E6EE"/>
            </svg>,
      title: 'Email',
      description: 'amgromov93@gmail.com',
      href: "mailto:amgromov93@gmail.com",
    },
    {
      id: 3,
      icon: <svg width="18" height="20" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M2.99992 7.75002C2.47364 7.30112 1.98583 6.80899 1.54159 6.27877C0.874919 5.48252 0.0832523 4.29669 0.0832523 3.16669C0.0826614 1.9865 0.793355 0.922267 1.8837 0.470603C2.97404 0.0189394 4.22911 0.268871 5.06325 1.10377C5.61178 1.64986 5.91905 2.39268 5.9166 3.16669C5.9166 4.29669 5.12492 5.48252 4.45825 6.27877C4.01401 6.80899 3.5262 7.30112 2.99992 7.75002ZM2.99992 1.91669C2.55334 1.91669 2.14068 2.15494 1.91739 2.54169C1.6941 2.92844 1.6941 3.40494 1.91739 3.79169C2.14068 4.17844 2.55334 4.41669 2.99992 4.41669C3.69028 4.41669 4.24992 3.85704 4.24992 3.16669C4.24992 2.47633 3.69028 1.91669 2.99992 1.91669Z" fill="#D9DFE8"/>
            </svg>,      
      title: 'Location',
      description: 'Ukraine, Kyiv',
      href: "#",
    },
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.contactsInfo__title}>My contacts</h3>
      <section className={styles.contactsInfo__container}>
        {contacts.map(item => (
          <article key={item.id} className={styles.contactsInfo__box}>
            <p className={styles.contactsInfo__box__icon}>
              {item.icon}
            </p>
            <p className={styles.contactsInfo__box__title}>{item.title}</p>
            <a className={styles.contactsInfo__box__description} href={item.href}>{item.description}</a>
          </article>
        ))}
      </section>
    </div>
  )
}