import React from 'react';
import { Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';
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
        return (<Navbar fluid={true} className="NavigationBar">
            <Navbar.Header className="Logo">
                <img src="/style/img/Le_Bona3.png" />
            </Navbar.Header>
            <Nav pullLeft={true} className="Navbar_font">
                <NavItem href="#" className="Navbar_font_element">Блог</NavItem>
                <NavItem href="#" className="Navbar_font_element">Магазин</NavItem>
                <NavItem href="#" className="Navbar_font_element">Контакты</NavItem>
                <NavItem href="#" className="Navbar_font_element">Корзина</NavItem>
            </Nav>
            <Nav pullRight={true}>
                <NavItem href="#">
                    <img src="noavatar.png" />
                </NavItem>
                <NavDropdown title="User name" id="basic-nav-dropdown">
                    <MenuItem >Профиль</MenuItem>
                    <MenuItem>Выход</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>);

    }
}
