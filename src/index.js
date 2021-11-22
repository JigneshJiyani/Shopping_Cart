import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoppingcart from './ShoppingCartApp/ShoppingCart';
import Greeting from './Greetings/grettings';


ReactDOM.render(
  <React.StrictMode>
    <Shoppingcart />
  </React.StrictMode>,
  document.getElementById('root')
);
