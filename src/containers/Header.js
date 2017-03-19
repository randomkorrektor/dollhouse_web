import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/products">Shop</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>);
    }
}
