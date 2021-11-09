import React, { useCallback, useEffect, useState } from "react";
import Cart from "./cart/cart";
import Layout from "./layout/layout";
import ProductList from "./product/productList";
import classes from "./index.module.css";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //// get products data from FAKE Store REST API
  const fetchProductsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=10"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      /// sort products
      let sortedProducts = [...data];
      sortedProducts.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      console.log(sortedProducts);

      setProducts(sortedProducts);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  //// post data to Firebase backend
  useEffect(() => {
    fetch("https://shop-app-e0cb8-default-rtdb.firebaseio.com/products.json", {
      method: "POST",
      body: JSON.stringify(products),
    });
  }, [products]);

  let content = <p>Products no found</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <Layout>
        <Cart />

        {!isLoading && products.length && !error ? (
          <ProductList products={products} />
        ) : (
          <section className={classes.info}>{content}</section>
        )}
      </Layout>
    </>
  );
};

export default Main;
