import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

const Item = (data) =>{ 
    const history = useHistory();
    const handleOnClick = useCallback(() => {
        localStorage.setItem("selectedItem",data.data.item)
       return history.push('/addItems'), [history]
    });

    return (

  <div   className="item">
      <div className="imagePlaceHolder"></div>
      <h2 onClick={handleOnClick}>{data.data.item}</h2>
  </div>
)};

export default Item;
