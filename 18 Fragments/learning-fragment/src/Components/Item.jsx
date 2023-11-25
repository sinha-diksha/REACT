import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className="list-group-item">
      {foodItem}
      <button
        type="button"
        className={`${styles.button}  btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
