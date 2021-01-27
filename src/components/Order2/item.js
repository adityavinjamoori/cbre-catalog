import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import SubItems from "./subItems";
import CustomizedDialogs from "./dialog";
class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = { showSubItems: false };

    }

    onClick(event) {
        const { showSubItems } = this.state;
        let isChecked = event.target.checked;

        this.setState(function(prevState, props){
            return {showSubItems: isChecked}
         });
        this.props.updateShared(this.props.data.item);
    }

    render() {
        const { showSubItems } = this.state;
        

      return (
        <div  className="item-container">

        <div className="item" >
            <div className={`imagePlaceHolder ${this.props.data.item}`}></div>
            <div className="desc">
                <h2 ><span className="titleName">{this.props.data.item}</span>
                <span ><CustomizedDialogs data = {this.props.data}></CustomizedDialogs></span>
                </h2>
                <div className="switchContainer">
                <h4>Add to Cart</h4>
                <label className="switch">
                <input onClick={this.onClick.bind(this)} type="checkbox"/>
                <span className="slider round"></span>
                </label> </div>
            </div>
        </div>
        <div>
        { showSubItems 
            ? <SubItems data={this.props.data}>This is visible</SubItems >
            : null
        }
        </div>
        </div>
      );
    }
  }

export default Item;
