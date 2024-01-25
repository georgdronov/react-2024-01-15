import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurants) => (
        <Restaurants restaurants={restaurants} />
      ))}
    </Layout>
  );
};
