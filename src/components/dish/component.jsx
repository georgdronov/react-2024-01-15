import classNames from "classnames";
import { Counter } from "../counter/counter";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.root)}>
        <span>{dish.name}</span>
        <span>{dish.price} Руб</span>
      </div>
      <Counter value={count} onChange={setCount}/>
    </div>
  );
};
