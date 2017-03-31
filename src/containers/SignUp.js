import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Utils from './Utils';
import Header from './Header';
import Footer from './Footer';
import {
    Link
} from 'react-router';




export default class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password1: "",
            password2: "",
            email: "",
            message: ""
        };
    }

    handleInputChange(name, event) {
        this.setState({ [name]: event.target.value });
    }
    async handleToggleClick(event) {
        if (this.state.password1 != this.state.password2) {
            alert('Пароли не совпадают');
            return;
        } else {
            try {
                const auth = await Utils.SignUp(this.state.email, this.state.password1, this.state.name);
                localStorage.setItem('session', auth.session._id);
                console.log(auth);
                window.location.replace('/#/products')
            } catch (e) {
                alert(e);
            }
        }
    }
    componentDidMount() {
        const session = localStorage.getItem('session');
        if (session) {
            window.location.replace('/#/products');
        }
    }


    render() {
        return (<div>
            <Header />
            <Grid fluid={true}>
                <Row className="row">
                    <Col lg={12}>
                        <Col lg={6} id="body_content">
                            <div>
                                <form role="form">
                                    <h2 className="Font_Caption">Регистрация</h2>
                                    <h3 className="Font_main">Введите имя</h3>
                                    <input type="email" className=" form-control form_border" required autofocus id="nameInput"
                                        name="name"
                                        type="text"
                                        onChange={this.handleInputChange.bind(this, 'name')} />
                                    <h3 className="Font_main">E-mail</h3>
                                    <input type="email" className="form-control form_border" required autofocus id="emailInput"
                                        name="email"
                                        type="text"
                                        onChange={this.handleInputChange.bind(this, 'email')} />
                                    <h3 className="Font_main">Пароль</h3>
                                    <input type="password" className="form-control form_border" required
                                        id="passwordInput"
                                        name="password"
                                        type="password"
                                        onChange={this.handleInputChange.bind(this, 'password1')} />
                                    <h3 className="Font_main">Повторите пароль</h3>
                                    <input type="password" className="form-control form_border" required
                                        id="password2Input"
                                        name="password2"
                                        type="password"
                                        onChange={this.handleInputChange.bind(this, 'password2')} />
                                    <li id="Sign_up" onClick={this.handleToggleClick.bind(this)}>
                                        <span id="Sign_in">Зарегистрироваться</span>
                                    </li>
                                    <label id="passCheckLabel" >
                                        <h4> {this.state.message} </h4>
                                    </label>
                                </form>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </div>);
    }
}
