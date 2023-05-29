import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRewiews, updateRewiews } from "../../../../store/actions";

import * as React from 'react';
import Button from '@mui/material/Button';

import styles from "../../../../sass/style.module.scss";

export default function RewiewsForm({ rewiews }) {
  const [message, setMessage] = useState(rewiews?.title ?? '');
  const dispatch = useDispatch();

  useEffect(() => {
    setMessage(rewiews?.title ?? '')
  }, [rewiews]);

  function onButtonClick(e) {
    e.preventDefault();

    const newRewiew = {
      ...rewiews,
      title: message,
    };

    if (newRewiew.id) {
      dispatch(updateRewiews(newRewiew))
    } else {
      dispatch(addRewiews(newRewiew))
    }

    setMessage('');
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <form className={styles.rewiews__form}>
      <input className={styles.rewiews__form__input} type="text" value={message} onChange={onMessageChange} />
      <Button disabled={message === "" ? true : false} className={styles.rewiews__form__btn} variant="contained" onClick={onButtonClick}>Save</Button>
    </form>
  )
}