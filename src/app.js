import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomePage from './containers/HomePage';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Profile from './containers/Profile';
import Products from './containers/Products';
import Product from './containers/Product';
import Blog from './containers/Blog';
import AddProduct from './containers/AddProduct';
import Contacts from './containers/Contacts';
import Cart from './containers/Cart';


const App = ({ children }) => children;
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Cart} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/profile" component={Profile} />
            <Route path="/products" component={Products} />
            <Route path="/product" component={Product} />
            <Route path="/blog" component={Blog} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/profile" component={Profile} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/cart" component={Cart} />
        </Route>
    </Router>, document.getElementById('root'));

