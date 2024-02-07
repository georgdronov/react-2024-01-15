import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurants, onSelect }) => {
  return (
    <div>
      {restaurants.map(({ name, id }) => {
        return <Tab title={name} onClick={() => onSelect(id)} />;
      })}
    </div>
  );
};
