import { Restaurant } from "../restaurant/component";
import styles from "./styles.module.scss"

export const Restaurants = ({ restaurants }) => {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};
