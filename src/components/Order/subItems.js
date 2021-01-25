import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import catalog from '../../assets/catalog';
import SubItem from './subItem'

const SubItems = () =>{ 
let selectedItem = localStorage.selectedItem;
let selectedMenu;

const history = useHistory();
const handleOnClick = useCallback(() => {
   return history.push('/cart'), [history]
});

catalog.items.forEach(ele =>{
    if(ele.item == selectedItem){
        selectedMenu = ele;
        return;
    }
})
return (
    <div className="subItems">
        <div className="headerSection">
            <div className="logo imagePlaceHolder"></div>
            <h2 className="title">{selectedMenu.item}</h2>
            <div className="description">{selectedMenu.description}</div>
        </div>
        <div className="section">
        <h3 className="subTitle">{selectedMenu.subTitle}</h3>
        <div onClick={handleOnClick} className="checkout">Checkout</div>
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
