import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonName) => {
        return <button className={styles.buttons}>{buttonName}</button>;
      })}
    </div>
  );
};

export default ButtonsContainer;
