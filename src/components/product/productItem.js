import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { modalActions } from "../../store/modal-slice";
import Card from "../UI/card";
import classes from "./productItem.module.css";

const ProductItem = ({ id, title, price, description, img }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItems({
        id,
        title,
        price,
      })
    );
    dispatch(modalActions.showModalContent());
  };
  return (
    <li className={classes.product}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div>
          <img src={img} height="200" width="200" alt={description} />
        </div>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
