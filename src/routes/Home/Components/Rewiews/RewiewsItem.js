import styles from '../../../../sass/style.module.scss';
import { useDispatch } from 'react-redux';
import { deleteRewiews, editRewiews } from '../../../../store/actions';

export default function RewiewItem({ rewiew }) {
  const dispatch = useDispatch();
  
  function onEditBtnClick(e) {
    e.stopPropagation();

    dispatch(editRewiews(rewiew));
  }

  return (
    <div className={styles.rewiews__item__buttons}>
      <button onClick={onEditBtnClick}>Change</button>
      <button onClick={() => dispatch(deleteRewiews(rewiew.id))}>Delete</button>
    </div>
  )
}