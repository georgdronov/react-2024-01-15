export const Review = ({ review }) => {
  return (
    <div>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <p>{review.rating} / 5</p>
    </div>
  );
};
