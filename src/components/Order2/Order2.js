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

  getAllItems(){
    let items = [];
    let _catalog = {...catalog}
  
    for(let i = 0 ; i< _catalog.items.length; i++){
      items.push(<Item expanded_item={this.state.expanded_item} updateShared={this.updateShared.bind(this)} key={_catalog.items[i].item} data={_catalog.items[i]} ></Item>)
    }
    return items;
  }

 

  render() {
      
    return (
      
  <div className="Order2">
      {this.getAllItems()}
  </div>
    );
  }
}


export default Order2;
