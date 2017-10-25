import React from 'react';
import { render } from 'react-dom';

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false
    }
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a className="btn" onClick={this.toggle}>Agree</a>
      </div>
    </div>
    );
    return (
      <div>
        <a className="btn" onClick={this.toggle}>Modal</a>
        {modal}
      </div>
    );
  }
}
