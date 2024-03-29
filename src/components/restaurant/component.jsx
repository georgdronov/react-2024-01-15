import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>

      <h3>Menu</h3>
      <Menu menu={restaurant.menu} />
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
