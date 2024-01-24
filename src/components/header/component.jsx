import { Button } from "../button/component";

export const Header = () => {
  return (
    <header>
      <Button onClick={() => console.log("Open menu")}>
        <span>Menu</span>
      </Button>
      <Button onClick={() => console.log("Open signIn page")}>SignIn</Button>
    </header>
  );
};
