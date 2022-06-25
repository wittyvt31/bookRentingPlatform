import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  return (
    <>
      <Link className="productCard" to={`/product/${product._id}`}>
        <img
          height="300px"
          src={product.images[0].url}
          alt={`Loading ${product.name}`}
        />
        <p id="name">{product.name}</p>
        <p>{product.author}</p>
        <div>
          <ReactStars {...options} />
          <span> {`(${product.category})`} </span>
        </div>
        <span>
          <span id="text">from</span>
          {` ₹${product.price}/Day`}
        </span>

        <span>
          <span id="text">available in</span>
          {` ${product.days} Days`}
        </span>
      </Link>
    </>
  );
}

export default ProductCard;
