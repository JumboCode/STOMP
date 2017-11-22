import React from 'react';

export class RegisterPage extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            email: "",
            password: "",
            confirm:  "",
            tuftsID: "",
        };
    }
    
    encode(field, string) {
        var newString = "";
        for(var i = 0; i < string.length; i++) {
            if(string[i] == '>') {
                newString += '&gt';
            }
            else if (string[i] == '<') {
                newString += '&lt';
            }
            else
                newString += string[i];
        }
        this.update(field, newString)
    }

    update(field, value) {

        this.setState({[field]: value});
    }

    encodeInput() {
        this.encode("first", this.state.first);
        this.encode("last", this.state.last);
        this.encode("email", this.state.email);
        this.encode("tuftsID", this.state.tuftsID);
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
                <label>First Name: </label>
                <input type="text" 
                       placeholder="Enter First Name" 
                       name="first" 
                       onChange={(event)=>this.update("first", event.target.value)} 
                       required/> 
                <br /><br />
                <label>Last Name: </label>
                <input type="text" 
                       placeholder="Enter Last Name" 
                       name="last" 
                       onChange={(event)=>this.update("last", event.target.value)} 
                       required/>
                <br /><br />
                <label>Email: </label> 
                <input type="text" 
                       placeholder="Enter Tufts/Business Email" 
                       name="email" 
                       onChange={(event)=>this.update("email", event.target.value)} 
                       required/>
                <br /><br />
                <label>Password: </label>
                <input type="password" 
                       placeholder="Enter Password" 
                       name="password" 
                       onChange={(event)=>this.update("password", event.target.value)}
                       required/>
                <br /><br />
                <label>Confirm Password: </label>
                <input type="password" 
                       placeholder="Confirm Password" 
                       name="confirm" 
                       onChange={(event)=>this.update("confirm", event.target.value)} 
                       required/>
                <br /><br />
                <label>Tufts ID: </label>
                <input type="text" 
                       placeholder="Enter Tufts ID" 
                       name="tuftsID" 
                       onChange={(event)=>this.update("tuftsID", event.target.value)} 
                       required/>
                <br /><br />
            </div>
            <div>
                <button style={button_style} onClick={()=>this.encodeInput()}>Register</button>
            </div>
        </div>
    )
  }
}