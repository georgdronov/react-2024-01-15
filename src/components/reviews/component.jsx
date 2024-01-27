import { Review } from "../review/components";

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};
