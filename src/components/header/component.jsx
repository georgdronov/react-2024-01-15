import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.button__wrapper}>
        <Button
          className={styles.pageLink}
          onClick={() => console.log("Open PopUp callBack")}
        >
          CallBack
        </Button>
        <Button
          className={styles.pageLink}
          onClick={() => console.log("SendMsg")}
        >
          SendMsg
        </Button>
        <Button
          className={styles.pageLink}
          onClick={() => console.log("Search")}
        >
          Search
        </Button>
      </div>
    </header>
  );
};
