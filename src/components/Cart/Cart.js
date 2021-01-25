import React from 'react';
import PropTypes from 'prop-types';
import CartItems from "./eachCartItem";

const Cart = () => {

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || null;

  if(cartItems == null){
    return (
      <div className="Cart">
        No Items added
      </div>
    )
  }
  else return (
  <div className="Cart">
    <div className="cartHeader">
      <h4 className="name"></h4>
      <h4 className="cal">Calories</h4>
      <h4 className="Price">Price</h4>
    </div>
    {getCartItems(cartItems)}

    <div className="cartHeader cartFooter">
      <h4 className="name">Total:</h4>
      <h4 className="cal">{getTotalCal(cartItems)}</h4>
      <h4 className="Price">$ {getTotalPrice(cartItems)}</h4>
    </div>

    <div className="buyButton">BUY</div>
  </div>
)};

function getCartItems(cartItems){
  let items = []
  for(var i in cartItems){
    items.push(<CartItems key={i} addedItems={cartItems[i]} mainItem={i} ></CartItems>)
  }

  return items;
}

function getTotalPrice(cartItems){
  let price = 0;
  for(var i in cartItems){

    for(var k = 0; k<cartItems[i]["addedItems"].length;k++){
      price = price+parseInt(cartItems[i]["addedItems"][k]["price"]);
    }
  }
  return price;
}

function getTotalCal(cartItems){
  let cal = 0;
  for(var i in cartItems){

    for(var k = 0; k<cartItems[i]["addedItems"].length;k++){
      cal = cal+parseInt(cartItems[i]["addedItems"][k]["calories"]);
    }
  }
  return cal;
}


export default Cart;
