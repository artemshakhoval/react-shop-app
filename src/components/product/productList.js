import React from "react";
import ProductItem from "./productItem";
import classes from "./productList.module.css";

const ProductList = ({ products }) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.image}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
