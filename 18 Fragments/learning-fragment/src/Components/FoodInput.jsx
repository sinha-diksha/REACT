import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="enter food item here"
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
