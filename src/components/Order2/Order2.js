import React from 'react';
import Item from "./item";
import catalog from "../../assets/catalog"



class Order2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded_item: null};
}
updateShared(_val) {
  this.setState({expanded_item: _val});
}

  getAllItems(sec){
    let items = [];
    let _catalog = {...catalog}
  
    for(let i = sec-1 ; i< _catalog.items.length; i = i+3){
      items.push(<Item updateShared={this.updateShared.bind(this)} key={_catalog.items[i].item} data={_catalog.items[i]} ></Item>)
    }
    return items;
  }

 

  render() {
      
    return (
      
  <div className="Order2">
    <div className="section30">
      {this.getAllItems(1)}
      </div>

      <div className="section30">
      {this.getAllItems(2)}
      </div>

      <div className="section30">
      {this.getAllItems(3)}
      </div>
  </div>
    );
  }
}


export default Order2;
