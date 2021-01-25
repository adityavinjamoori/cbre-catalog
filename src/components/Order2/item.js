import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import SubItems from "./subItems"
class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = { showSubItems: false };

    }
    componentWillReceiveProps(){

        if(this.props.expanded_item && this.props.expanded_item != this.props.data.item){
            this.setState(function(prevState, props){
                return {showSubItems: false}
             });        
            }
    }

    onClick(event) {
        const { showSubItems } = this.state;

        this.setState(function(prevState, props){
            return {showSubItems: !prevState.showSubItems}
         });
        this.props.updateShared(this.props.data.item);
    }

    render() {
        const { showSubItems } = this.state;
        

      return (
        <div  className="item-container">
        <div className="item" onClick={this.onClick.bind(this)}>
            <div className="imagePlaceHolder"></div>
            <div className="desc">
                <h2 >{this.props.data.item}</h2>
                <div >{this.props.data.description}</div>
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
