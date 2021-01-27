import React, {useCallback} from 'react';
import CustomizedDialogs from "./dialog";

const SubItem = (data) =>{ 
    const handleOnChange = useCallback((event) => {
        let isChecked = event.target.checked;
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
        if(!cartItems[data.mainItem.item])
            cartItems[data.mainItem.item] = {addedItems:[]};
        cartItems[data.mainItem.item]["addedItems"] = cartItems[data.mainItem.item]["addedItems"].filter(i =>{
                if(i.name == data.data.name)
                    return false;
                return true;
            })
        if(isChecked){
            cartItems[data.mainItem.item]["addedItems"].push(data.data);
        }
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    });

    return (

  <div className="chunk">
      <div className="imagePlaceHolder">
      </div>
      <div className="desc">
          <div className="name">
            {data.data.name} <span ><CustomizedDialogs data = {data.data}></CustomizedDialogs></span>
          </div>

          <div className="calories">
            {data.data.calories} cal
          </div>
          <div className="amount">
            $ {data.data.price}
          </div>
      </div>
      <label className="switch">
        <input onClick={handleOnChange} type="checkbox"/>
        <span className="slider round"></span>
        </label>

  </div>
)};

export default SubItem;
