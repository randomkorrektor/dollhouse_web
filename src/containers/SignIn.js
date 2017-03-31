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

    async handleToggleRegClick(event) {
        window.location.replace('/#/signup');
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

            <Grid className='signin_container'>
                <Row>
                    <Col lg={1} />
                    <Col lg={4} className="zero_angel">
                        <h2 className="Navbar_ts">Вход в систему</h2>
                        <div className="input_area">
                            <div className="input_row">
                                <h3 className="AGOptCyrillic">E-mail</h3>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={this.handleInputChange.bind(this, 'email')}
                                />
                            </div>
                            <div className="input_row">
                                <h3 className="AGOptCyrillic">Пароль</h3>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={this.handleInputChange.bind(this, 'password')}
                                />
                            </div>
                        </div>
                        <div className="sign_in zero_angel AGOptCyrillic" onClick={this.handleToggleClick.bind(this)}>Войти</div>
                    </Col>
                    <Col lg={1} />
                    <Col lg={4}>
                        <div>
                            <div className="register_text">
                                <h2 className="Navbar_ts">Ещё не зарегистрированы?</h2>
                                <h3 className="AGOptCyrillic">Создайте свою учетную запись - это легко и займёт не больше минуты!</h3>
                            </div>
                            <div className="sign_up zero_angel AGOptCyrillic" onClick={this.handleToggleRegClick.bind(this)}>Зарегистрироваться</div>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </div>);
    }
    /*
    render() {
        return (<div>
            <Header />
            <Grid>
                <Row>
                    <Col lg={6} id="body_content">
                        <div className="container-left">
                            <form className="form-signin" role="form">
                                <h2 className="form-signin-heading Font_Caption"></h2>
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
                                <li className="btn btn-lg btn-primary btn-block Sign_in form_border" type="submit" onClick={this.handleToggleClick.bind(this)} ></li>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </div>);
    }
    */
}
