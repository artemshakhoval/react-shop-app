import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import classes from "./cartButton.module.css";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(modalActions.showModalContent());
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
