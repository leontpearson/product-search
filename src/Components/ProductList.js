import React, { Component } from "react";
import Product from "./Product";
import "./ProductList.css";

class ProductList extends Component {
  state = {
    filterCategory: "",
  };

  products = [
    {
      name: "Leather Jacket",
      category: "jackets",
      description:
        "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
      price: 400,
    },
    {
      name: "Wool cardigan",
      category: "jackets",
      description:
        "Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.",
      price: 80,
    },
    {
      name: "Striped business shirt",
      category: "shirts",
      description:
        "No ironing necessary to look professional every day with this striped shirt.",
      price: 50,
    },
    {
      name: "Short-sleeved polo shirt",
      category: "shirts",
      description: "The best shirt you can get for that business-casual look.",
      price: 30,
    },
    {
      name: "Plain business shirt",
      category: "shirts",
      description:
        "No ironing necessary to look professional every day with this plain business shirt.",
      price: 50,
    },
    {
      name: "Suit Jacket",
      category: "jackets",
      description: "Wear it with jeans or suit pants, it works with both!",
      price: 120,
    },
    {
      name: "Suit Trousers",
      category: "pants",
      description:
        "Get 5 of these and you've got pants for every day of the week.",
      price: 100,
    },
    {
      name: "Denim Jeans",
      category: "pants",
      description:
        "A timeless classic, these denim jeans will never go out of style.",
      price: 80,
    },
    {
      name: "Pencil Skirt",
      category: "skirts",
      description:
        "A classy work-ready skirt that will make you feel like a million bucks.",
      price: 100,
    },
    {
      name: "Cotton flowy skirt",
      category: "skirts",
      description:
        "For those warm summer days when you just need to feel the breeze on your legs.",
      price: 45,
    },
  ];

  setFilterCategory = (categories) => {
    this.setState({ filterCategory: categories });
  };

  render() {
    const { filterCategory } = this.state;

    const filteredProducts = filterCategory
      ? this.products.filter((product) => product.category === filterCategory)
      : this.products;

    return (
      <div className="product-list">
        <h2>Clothing Items</h2>
        <div className="filter-buttons">
          <button onClick={() => this.setFilterCategory("")}>
            All Products
          </button>
          <button onClick={() => this.setFilterCategory("shirts")}>
            Shirts
          </button>
          <button onClick={() => this.setFilterCategory("pants")}>
            Pants & Skirts
          </button>
          <button onClick={() => this.setFilterCategory("jackets")}>
            Jackets
          </button>
        </div>
        <div className="products">
          {filteredProducts.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
