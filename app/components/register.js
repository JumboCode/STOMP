import React from 'react';

export class RegisterPage extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        first: "",
        last: "",
        password: "",
        confirm:  "",
        tuftsID: "",
      };
  }

  render() {

    const container = {
      display: 'block',
      borderRadius: '10px 50px 30px',
      background: '#FFFFFF',
      marginLeft: '580px',
      marginTop: '40px',
      height: '470px',
      width: '400px',
      border: '1px black solid',
      fontFamily: "Helvetica",
      textAlign: 'center',
      position: 'fixed',
    };

    const button_style = {
	background: '#FF6E40',
	color: 'black',
	fontSize: 32,
    };
    return (
      <div className="register" style={container}>
      <h1 style={{fontSize: '64px'}}> REGISTER </h1>
      <div>
        First Name: <input type="text" placeholder="Enter First Name" name="first" required/> 
	<br /> <br />
        Last Name: <input type="text" placeholder="Enter Last Name" name="last" required/>
        <br /> <br />
        Email: <input type="text" placeholder="Enter Tufts/Business Email" name="last" required/>
        <br /> <br />
	Password: <input type="text" placeholder="Enter Password" name="password" required/>
        <br /> <br />
	Confirm Password: <input type="text" placeholder="Confirm Password" name="confirm" required/>
        <br /> <br />
	Tufts ID: <input type="text" placeholder="Enter Tufts ID" name="tuftsID" required/>
	<br /><br />
      </div>
      <div>
        <button style={button_style}>Register</button>
      </div>
      </div>
    )
  }
}
