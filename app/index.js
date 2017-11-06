import React from 'react';
import { render } from 'react-dom';

//import App from './components/App';
import { SignIn } from './components/signin';
import { RegisterPage } from './components/register';
//render(<App />, document.getElementById('root'));
render(

        <div>
	    <SignIn />
	    <RegisterPage />
	</div>, 
	document.getElementById('root')
);

