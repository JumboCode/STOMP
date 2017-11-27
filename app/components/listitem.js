import React, { PropTypes } from 'react';

const propTypes = {
  view:   PropTypes.string.isRequired,
  id:     PropTypes.string,
  name:   PropTypes.string,
  amount: PropTypes.string,
  pic:    PropTypes.string,
};

class ListItem extends React.Component {

  render() {
    const { view, id, name, amount, pic } = this.props;
    const listClass = 'list-item card ${view}';
    const style     = { zIndex: 100 - this.props.index };

    return(
      <li id = {id} className = {listClass} style = {style}>
        <span>
          <div className = "list-item">
            <img src = {pic};/>
            <h1 className = "list-item-name">
              {name}
            </h1>
          </div>
          <div className = "list-item-data">
            <h2 className = "list-item-id">ID</h2>
            <div>
              {id}
            </div>
            <h2 className = "list-item-amt">Amount</h2>
            <div>
              {amount}
            </div>
          </div>
        </span>
      </li>
    )
  }
}

ListItem.PropTypes = propTypes;
export default ListItem;