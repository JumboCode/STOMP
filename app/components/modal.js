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
                    <h4>Add Item to the Closet!</h4>
                    Item: <input name="name" type="text" /> <br />
                    Number: <input name="number" type="text" /> <br />
                </div>
                <div className="modal-footer">
                    <a className="button" onClick={this.toggle}>&times;</a>
                </div>
            </div>
            );

        return (
            <div>
                <a className="button" onClick={this.toggle}>Add Item</a>
                {modal}
            </div>
        );
    }
}
