import React, { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rating } from "@mui/material";
// import { Rating } from "react-simple-star-rating";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard.js";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";

const ProductDetails = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [days, changeDays] = useState(1);

  const [rating, setRating] = useState(0);

  const incrementDays = () => {
    days < product.maxLimit && changeDays(days + 1);
  };
  const decrementDays = () => {
    days > 1 && changeDays(days - 1);
  };

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const mystyle = {
    color: "green",
    fontWeight: "bold",
  };

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    if (error) {
      // return alert.error(error)
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id)); //for backend it is req, for frontend it is match
  }, [dispatch, id, alert, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} | ParaVidya`} />
          <div className="productDetails">
            <div>
              <Carousel style={styles}>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      // height="500px"
                      width="500px"
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {product.numOfReviews} Reviews
                </span>
              </div>
              <br></br>
              <span>
                Available in
                <span style={mystyle}>{` ${product.days} Days`}</span>
              </span>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price} x ${days}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decrementDays}>-</button>
                    <input value={days} type="number"></input>
                    <button onClick={incrementDays}>+</button>
                  </div>
                  <button disabled={product.Stock < 1 ? true : false}>
                    Day(s){" "}
                    <span id="limit">{`[Max: ${product.maxLimit}]`}</span>
                  </button>
                </div>

                <p>
                  <span id="price">Price: ₹{product.price * days}</span>
                  {/* <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? " OutOfStock" : " InStock"}
                  </b> */}
                  <button className="submitReview">Rent</button>
                </p>
              </div>

              <div className="detailsBlock-4">
                Other Users :{" "}
                <p>
                  <br></br>
                  <p id="otherUser">
                    by @bookKeeda,<span id="price">{`    Price: ₹25/Day`}</span>
                    {` (available in`}
                    <span>{` 3 Day(s))`}</span>
                  </p>
                  <br></br>
                  <br></br>
                  <p id="otherUser">
                    by @manav31,<span id="price">{`    Price: ₹26/Day`}</span>
                    {` (available in`}
                    <span>{` 3 Days(s))`}</span>
                  </p>
                  <br></br>
                  <br></br>
                  <p id="otherUser">
                    by @ahamBrhma,<span id="price">{`    Price: ₹29/Day`}</span>
                    {` (available in`}
                    <span>{` 2 Day(s))`}</span>
                  </p>
                  <br></br>
                  <br></br>
                  <p id="otherUser">
                    by @saroj,<span id="price">{`    Price: ₹30/Day`}</span>
                    {` (available in`}
                    <span>{` 1 Day(s))`}</span>
                  </p>
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
