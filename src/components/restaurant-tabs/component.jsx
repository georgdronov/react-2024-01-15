import { Tab } from "../tab/component";
import styles from "./styles.module.scss"

export const RestaurantTabs = ({ restaurants, onSelect }) => {
  return (
    <div className={styles.root}>
      {restaurants.map(({ name, id }) => {
        return <Tab title={name} onClick={() => onSelect(id)} />;
      })}
    </div>
  );
};
