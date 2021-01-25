import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import SubItems from "./subItems"
class Item extends React.Component {
    state = { showSubItems: false };

    render() {
        const { showSubItems } = this.state;

      return (
        <div className="item-container">
        <div className="item" onClick={() => this.setState({ showSubItems: !showSubItems })}>
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
