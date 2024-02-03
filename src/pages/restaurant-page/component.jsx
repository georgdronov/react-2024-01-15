import { Restaurant } from "../../components/restaurant/component";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { useState } from "react";
import { restaurants } from "../../constants/mock";

export const RestaurantPage = () => {
  const [activeRestaurantId, setRestaurantId] = useState();
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <div>
      <RestaurantTabs restaurants={restaurants} onSelect={setRestaurantId} />
      {activeRestaurant ? (
        <Restaurant restaurant={activeRestaurant} />
      ) : (
        "No active restaurant"
      )}
    </div>
  );
};
