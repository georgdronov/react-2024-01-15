import { Button } from "../button/component";

import styles from "./styles.module.scss";
import classNames from "classnames";


export const Counter = ({value, min = 0, max = 5, onChange}) => {

  return (
    <div className={classNames(styles.root, classNames)}>
      <Button
        onClick={() => {
          onChange(value - 1);
        }}
        disabled={value === min}
      >
        -
      </Button>
      <span>{value}</span>
      <Button
        onClick={() => {
          onChange(value + 1);
        }}
        disabled={value === max}
      >
        +
      </Button>
    </div>
  );
};
