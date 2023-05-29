import styles from "../../../../sass/style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRewiews } from "../../../../store/actions";
import RewiewsList from "./RewiewsList";
import RewiewsForm from "./RewiewsForm";

export default function Rewiews() {
  const rewiewsClasses = styles.container + ' ' + styles.rewiews;
  
  const rewiews = useSelector(state => state.rewiews);
  const rewiewsList = useSelector(state => state.rewiewsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRewiews());
  }, [dispatch])
  
  return (
    <div className={rewiewsClasses}>
      <h3 className={styles.rewiews__title}>Reviews</h3>
      <p className={styles.rewiews__text}>This container created with RESTfull API & REDUX, styled with MUI. You can create, change and delete item</p>
      <div>
        <RewiewsForm rewiews= {rewiews}/>
        <RewiewsList rewiewsList={rewiewsList}/>
      </div>
    </div>
  )
}