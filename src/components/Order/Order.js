import React from 'react';
import Item from "./item";
import catalog from "../../assets/catalog"

const Order = () => {

  return(

  <div className="Order">
    {getAllItems()}
  </div>
)};

function getAllItems(){
  let items = [];
  let _catalog = {...catalog}

  for(let i = 0 ; i< _catalog.items.length; i++){
    items.push(<Item key={_catalog.items[i].item} data={_catalog.items[i]} ></Item>)
  }
  return items;
}


export default Order;
