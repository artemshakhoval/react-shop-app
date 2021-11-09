import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import Card from "../UI/card";
import Modal from "../UI/modal";
import classes from "./cart.module.css";
import CartItem from "./cartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const show = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();

  const hideModalHandler = () => {
    dispatch(modalActions.hideModalContent());
  };

  return (
    <>
      {show && (
        <Modal hideModalHandler={hideModalHandler}>
          <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={{
                      id: item.id,
                      title: item.title,
                      quantity: item.quantity,
                      total: item.totalPrice,
                      price: item.price,
                    }}
                  />
                ))
              ) : (
                <p>Shopping list is empty.</p>
              )}
            </ul>
            <div className={classes.actions}>
              <button onClick={hideModalHandler}>Cancel</button>
              <button onClick={hideModalHandler}>Confirm</button>
            </div>
          </Card>
        </Modal>
      )}
    </>
  );
};

export default Cart;
