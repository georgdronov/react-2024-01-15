import styles from "./styles.module.scss";
import { useReviewForm } from "./use.review-form";

export const ReviewForm = () => {
  const { form, dispatch } = useReviewForm();

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(event) => setValue("setName", event.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Комментарий</label>
        <input
          id="text"
          type="text"
          value={form.text}
          onChange={(event) => setValue("setText", event.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Рейтинг</label>
        <input
          id="rating"
          type="number"
          min={1}
          max={5}
          value={form.rating}
          onChange={(event) => setValue("setRating", event.target.value)}
        />
      </div>
    </div>
  );
};
