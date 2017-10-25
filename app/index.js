import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import { SignIn } from './components/SignIn';
import { Modal } from './components/Modal';

//render(<App />, document.getElementById('root'));
//render(<SignIn />, document.getElementById('root'));
render(<Modal />, document.getElementById('root'));