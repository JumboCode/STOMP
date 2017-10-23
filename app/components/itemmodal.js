import React from 'react';
import { render } from 'react-dom';

export class ItemModal extends React.Component {
    open() {
    }

    close() {

    }

	render() {
		return (
            <div>
                <button id="button" onClick={this.open}>Add Item</button>
                <div className="modal">
                    <span className="close" onClick={this.close}>&times;</span>
                    Item: <input name="item" type="text" /> <br />
                    Number: <input name="number" type="text" /> <br />
                </div>
            </div>
        );
    }
}