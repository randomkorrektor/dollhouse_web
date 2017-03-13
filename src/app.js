import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomePage from './containers/HomePage';

const App = ({ children }) => children;
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
        </Route>
    </Router>, document.getElementById('root'));

