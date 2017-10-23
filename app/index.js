import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import { SignIn } from './components/SignIn';
import { ItemModal } from './components/ItemModal';

//render(<App />, document.getElementById('root'));
//render(<SignIn />, document.getElementById('root'));
render(<ItemModal />, document.getElementById('root'));