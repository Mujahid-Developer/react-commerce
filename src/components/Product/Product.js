import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./product.css";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" srcset="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>Price: ${price}</p>
        <p>
          <small style={{ color: "red" }}>
            Only {stock} items available. Order soon.
          </small>
        </p>
        <div>
          <button
            className="main-button"
            onClick={() => props.handlerAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
