import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import {
    Link
} from 'react-router';




export default class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            password: " ",
            email: " ",
            subscribeCheck: "true",
            message: " "
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        const target = event.target;

        if (target.type == 'checkbox') {
            this.setState({ subscribeCheck: target.checked });
        }
        else {
            if (target.id != emailInput) {
                if (passwordInput.value == password2Input.value) {
                    this.setState({ message: "" });
                }
                else {
                    this.setState({ message: "Пароли должны совпадать" });
                }
            }

            const value = target.value;
            const name = target.name;
            this.setState({ [name]: value });
        }
    }

    handleToggleClick(event) {

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
                                    <input type="email" className="form-control form_border" required autofocus />
                                    <h3 className="Font_main">E-mail</h3>
                                    <input type="email" className="form-control form_border" required autofocus id="emailInput"
                                        name="email"
                                        type="text"
                                        onChange={this.handleInputChange} />
                                    <h3 className="Font_main">Пароль</h3>
                                    <input type="password" className="form-control form_border" required
                                        id="passwordInput"
                                        name="password"
                                        type="password"
                                        onChange={this.handleInputChange} />
                                    <h3 className="Font_main">Повторите пароль</h3>
                                    <input type="password" className="form-control form_border" required
                                        id="password2Input"
                                        name="password2"
                                        type="password"
                                        onChange={this.handleInputChange} />
                                    <li id="Sign_up" onClick={this.handleToggleClick}><a href="#" id="Sign_in">Зарегистрироваться</a></li>
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
