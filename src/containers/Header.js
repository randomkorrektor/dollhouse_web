import React from 'react';
import { Nav, NavItem, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';
import Utils from './Utils';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    async componentDidMount() {
        const session = localStorage.getItem('session');
        if (session) {
            const auth = await Utils.Profile(session);
            this.setState({
                user: auth
            });
        }
    }
    logout() {
        localStorage.removeItem('session');
        this.setState({
            user: null
        });
    }
    render() {
        let right;
        if (this.state.user) {
            right = (<Nav className="Navbar_font" pullRight={true}>
                <NavItem href="#">
                    <img className="Navbar_Avatar" src={this.state.user.picture} />
                </NavItem>
                <NavDropdown title={this.state.user.name} className="DropHigh" id="UserName" >
                    <MenuItem >Профиль</MenuItem>
                    <MenuItem divider />
                    <MenuItem onClick={this.logout.bind(this)}>Выход</MenuItem>
                </NavDropdown>
            </Nav>);

        } else {

            right = (<Nav className="Navbar_font" pullRight={true}>
                <NavItem className="Navbar_font_element" href="#/signup">
                    Зарегестрироваться
                </NavItem>
                <NavItem className="Navbar_font_element" href="#/signin">
                    Войти
                </NavItem>
            </Nav>);
        }
        return (<Navbar fluid={true} className="NavigationBar">
            <Navbar.Header className="Logo">
                <img src="/style/img/Le_Bona3.png" />
            </Navbar.Header>
            <Nav pullLeft={true} className="Navbar_font">
                <NavItem href="#/blog" className="Navbar_font_element">Блог</NavItem>
                <NavItem href="#/products" className="Navbar_font_element">Магазин</NavItem>
                <NavItem href="#/contacts" className="Navbar_font_element">Контакты</NavItem>
                <NavItem href="#/cart" className="Navbar_font_element">Корзина</NavItem>
            </Nav>
            {right}
        </Navbar>);

    }
}
