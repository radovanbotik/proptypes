import React from "react";
import propTypes from "prop-types";
import defaultImage from "../assets/me.jpg";

export default function Product(props) {
  console.log(props);
  //  const imageUrl = props.image && props.image.url;
  const imageUrl = props.image && props.image;
  return (
    <div style={{ border: "4px solid currentColor" }}>
      <h2>{props.name}</h2>
      <h3>${props.price || 50}</h3>
      <img style={{ width: "150px" }} src={imageUrl || defaultImage} alt="" />
      <h5>{props.company}</h5>
      <p>{props.description}</p>
    </div>
  );
}

Product.propTypes = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  company: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
// Product.defaultProps = {
//   name: "default name",
//   price: 500,
//   image: defaultImage,
//   company: "ikea",
//   shipping: false,
//   description: "some text or something",
// };
