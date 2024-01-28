import styles from "./styles.module.scss";
import classNames from "classnames";
import { Size } from "../../constants/sizes";
import { ButtonViewVariant } from "./constant";

export const Button = ({
  children,
  onClick,
  className,
  size = Size.l,
  viewVariant = ButtonViewVariant.primary,
}) => {
  return (
    <button
      className={classNames(
        styles.root,
        className,
        styles[size],
        styles[viewVariant]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
