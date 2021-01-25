import React from 'react';
import PropTypes from 'prop-types';

const CartItems = (data) => {
return (
  <div className="CartItems">
     <h3 className="title">
        { data.mainItem}
     </h3>
     <div className="cartList">
         {getCartList(data.addedItems.addedItems)}
     </div>

  </div>
)};

function getCartList(list){
    let items = []
    for(var i = 0; i<list.length;i++){
      items.push(<CartItem key={list[i]["name"]} className="listItem" data={list[i]} ></CartItem>)
    }
  
    return items;
}

const CartItem = (data) => {
    return (
      <div className="CartItem">
          <div className="itemName">
            {data.data.name}
          </div>
          <div className="itemCal">
            {data.data.calories}
          </div>
          <div className="itemPrice">
            {data.data.price}
          </div>

      </div>
    )};



export default CartItems;
