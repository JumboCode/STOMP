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
      margin: 'auto',
      width: '20%',
      border: '1px black solid',
      textAlign: 'center',
    };

    return (
      <div className="register" style={container}>
      <h1> STOMP </h1>
      <div>
        <label><b>First name</b></label><br/>
        <input type="text" placeholder="Enter First Name" name="first" required/>
      </div>
      <div>
        <label><b>Last name</b></label><br/>
        <input type="text" placeholder="Enter Last Name" name="last" required/>
      </div>
      <div>
        <label><b>Password</b></label><br/>
        <input type="text" placeholder="Enter Password" name="password" required/>
      </div>
      <div>
        <label><b>Confirm Password</b></label><br/>
        <input type="text" placeholder="Confirm Password" name="confirm" required/>
      </div>
      <div>
        <label><b>Tufts ID</b></label><br/>
        <input type="text" placeholder="Enter Tufts ID" name="tuftsID" required/>
      </div>
        <button>Register</button>
      </div>
    )
  }
}