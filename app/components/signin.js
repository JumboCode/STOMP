import React from 'react';
import { render } from 'react-dom';

export class SignIn extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
		    email: "",
		    password: "",
		};
	}
	update(field, value) {
    	this.setState({[field]: value});
  	}

	render() {
	    const login_container = {
			display: 'block',
			borderRadius: '20px',
			margin: '100px',
			marginLeft: '200px',
			marginTop: '150px',
			height: '400px',
			width: '400px',
			background: "#3D5AFE",
			fontFamily: "Helvetica",
			color: 'white',
			textAlign: 'center',
			padding: '5px',
			position: 'fixed',
	    };

	    const button_style = {
			background: '#1A237E',
			color: 'white',
			fontSize: 32,
	    };

	    return (
    		<div className="signin" style={login_container}>
				<h1 style={{fontSize: '64px', textAlign: 'center'}}>LOGIN</h1>
				<h2 style={{fontSize: '21px'}}>Welcome back</h2>
    			<div>
    				<label>Email: </label>
    				<input name="email" 
    					   type="text" 
    					   onChange={(event)=>this.update("email", event.target.value)} /> 
	    			<br /><br />
				    <label>Password: </label>
				    <input name="password" 
				    	   type="text" 
				    	   onChange={(event)=>this.update("password", event.target.value)} /> 
				    <br /><br />
				    <button style={button_style}>Log In</button>
				</div>
    		</div>
        );
 	}
}
