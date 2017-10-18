import React from 'react';
import { render } from 'react-dom';

export class SignIn extends React.Component {
	render() {
		return (
            <div>
            	<h1>Sign in to STOMP!</h1>
    			Email: <input name="email" type="text" /> <br />
    			Password: <input name="password" type="text" /> <br />
    			<button>Sign In</button>
    			<button>Register</button>
    		</div>
        );
 	}
}