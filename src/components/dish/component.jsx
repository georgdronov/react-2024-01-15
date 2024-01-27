export const Dish = ({ dish }) => {
  return (
    <div>
      <span>{dish.name}</span> <span>{dish.price} Руб</span>
    </div>
  );
};
