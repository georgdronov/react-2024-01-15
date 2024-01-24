export const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <h3>{restaurants.name}</h3>
      <h4>Меню</h4>
      <ul>
        {restaurants.menu.map((menuList) => (
          <li>
            {menuList.name} <b>{menuList.price} руб</b>
          </li>
        ))}
      </ul>
      <h4>Отзывы</h4>
      <ul>
        {restaurants.reviews.map((reviewsList) => (
          <li>
            {reviewsList.user}: {reviewsList.text}. <b>{reviewsList.rating} / 5</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
