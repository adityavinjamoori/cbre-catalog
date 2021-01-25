import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import catalog from '../../assets/catalog';
import SubItem from './subItem'

const SubItems = (data) =>{ 
let selectedItem = data.data
let selectedMenu = data.data

return (
    <div className="subItems2">
    <div className="cartHeader chunk">
      <h4 className="image"></h4>
      <h4 className="name">Item</h4>
      <h4 className="cal">Calories</h4>
      <h4 className="Price">Price</h4>
      <h4 className="Price">Add to Cart</h4>
    </div>
        <div className="list">{getListItems(selectedMenu.subItems,selectedMenu)}</div>
    </div>
)};

function getListItems(subItems,selectedMenu){
    let items = [];
    let _subItems = [...subItems]
  
    for(let i = 0 ; i< _subItems.length; i++){
      items.push(<SubItem key={_subItems[i].name} data={_subItems[i]} mainItem ={selectedMenu} ></SubItem>)
    }
    return items;
}



export default SubItems;
