import React from "react";
import "./ProductListItem.css";

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale
}) {
  return (
    <div className={`card ${isOnSale && 'card--on-sale'} `}>
      <h2>{name + (isOnSale && '(On Sale)')}</h2>
      <img src={imageUrl} alt="" />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? 'Sold Out' :'Add to Cart'}
      </button>
    </div>
  );
}
