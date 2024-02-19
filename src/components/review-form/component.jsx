import styles from "./styles.module.scss";

export const ReviewForm = () => {
  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" />
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Комментарий</label>
        <input id="text" type="text" />
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Рейтинг</label>
        <input id="rating" type="number" min={1} max={5}/>
      </div>
    </div>
  );
};
