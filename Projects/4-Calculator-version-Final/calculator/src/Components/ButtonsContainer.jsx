import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
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
        return (
          <button
            className={styles.buttons}
            onClick={() => onButtonClick(buttonName)}
            key={buttonName}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;
