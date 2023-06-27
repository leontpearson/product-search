import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    const { name, description, price } = this.props.product;

    return (
      <div className="product">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    );
  }
}
export default Product;
