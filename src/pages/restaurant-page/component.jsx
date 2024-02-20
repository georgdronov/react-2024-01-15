import { Restaurant } from "../../components/restaurant/component";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { useState } from "react";
import { restaurants } from "../../constants/mock";
import styles from "./styles.module.scss"

export const RestaurantPage = () => {
  const [activeRestaurantId, setRestaurantId] = useState();
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <div className={styles.root}>
      <RestaurantTabs restaurants={restaurants} onSelect={setRestaurantId} />
      {activeRestaurant ? (
        <Restaurant restaurant={activeRestaurant} />
      ) : (
        <p>Выберите ресторан</p>
      )}
    </div>
  );
};
