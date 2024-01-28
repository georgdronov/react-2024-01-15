import { Button } from "../button/component";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        onClick={() => {
          if (count < 5) {
            setCount(count + 1);
          }
        }}
      >
        +
      </Button>
    </div>
  );
};
