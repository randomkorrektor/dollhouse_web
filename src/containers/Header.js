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
        this.state = {
            user: null
        }
    }

    async componentDidMount() {
        const session = localStorage.getItem('session');
        if (session) {
            const auth = await fetch(`http://192.168.0.102:3000/api/user?session=${session}`)
                .then(r => r.json())
                .then((r) => {
                    if (r.success) {
                        return r.data;
                    }
                    throw r.error
                });
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
            right = (<Nav pullRight={true}>
                <NavItem href="#">
                    <img className="Navbar_Avatar" src={this.state.user.picture} />
                </NavItem>
                <NavDropdown title={this.state.user.name} className="DropHigh UserName" >
                    <MenuItem >Профиль</MenuItem>
                    <MenuItem onClick={this.logout.bind(this)}>Выход</MenuItem>
                </NavDropdown>
            </Nav>);
        } else {

            right = (<Nav pullRight={true}>
                <NavItem href="#/signup">
                    Зарегестрироваться
                </NavItem>
                <NavItem href="#/signin">
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
