import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Utils from './Utils';
import Header from './Header';
import Footer from './Footer';
import {
    Link
} from 'react-router';

export default class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(name, event) {
        this.setState({ [name]: event.target.value });
        console.log({ [name]: event.target.value });
    }

    async handleToggleClick(event) {
        try {
            const auth = await Utils.SignIn(this.state.email, this.state.password);
            localStorage.setItem('session', auth._id);
            console.log(auth);
            window.location.replace('/#/products')
        } catch (e) {
            alert(e);
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
            <Grid>
                <Row>
                    <Col lg={6} id="body_content">
                        <div className="container-left">
                            <form className="form-signin" role="form">
                                <h2 className="form-signin-heading Font_Caption">Вход в систему</h2>
                                <h3 className="form-signin-heading Font_main">E-mail</h3>
                                <input type="email" className="form-control form_border" placeholder="E-mail" required autofocus
                                    id="emailInput"
                                    name="email"
                                    type="text"
                                    onChange={this.handleInputChange.bind(this, 'email')} />
                                <h3 className="form-signin-heading Font_main">Пароль</h3>
                                <input type="password" className="form-control form_border" placeholder="Пароль" required
                                    id="passwordInput"
                                    name="password"
                                    type="password"
                                    onChange={this.handleInputChange.bind(this, 'password')} />
                                <li className="btn btn-lg btn-primary btn-block Sign_in form_border" type="submit" onClick={this.handleToggleClick.bind(this)} >Войти</li>
                            </form>
                        </div>
                    </Col>
                    <Col lg={6} id="body_content">
                        <div className="container-left">
                            <h2 className="Font_Caption">Ещё не зарегистрированы?</h2>
                            <h3 className="Font_main">Создайте свою учетную запись - это легко и займёт не больше минуты!</h3>
                            <li id="Sign_up"><a href="#" id="Sign_in">Зарегистрироваться</a></li>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </div>);
    }
}
