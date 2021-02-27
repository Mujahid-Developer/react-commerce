import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  const first10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handlerAddProduct = (product) => {
    console.log("Added product", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            handlerAddProduct={handlerAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>This is a cart</h1>
        <h5>Order Summery: {cart.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
