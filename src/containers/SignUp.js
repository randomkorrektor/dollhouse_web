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

            <Grid className='signup_container'>
                <Row>
                    <Col lg={1} />
                    <Col lg={4} className="zero_angel">
                        <h2 className="Navbar_ts">Регистрация</h2>
                        <div className="input_area">
                            <div className="input_row">
                                <h3 className="AGOptCyrillic">Введите имя</h3>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleInputChange.bind(this, 'name')}
                                />
                            </div>
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
                                    onChange={this.handleInputChange.bind(this, 'password1')}
                                />
                            </div>
                            <div className="input_row">
                                <h3 className="AGOptCyrillic">Повторите пароль</h3>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={this.handleInputChange.bind(this, 'password2')}
                                />
                            </div>
                        </div>
                        <div className="sign_up zero_angel AGOptCyrillic" onClick={this.handleToggleClick.bind(this)}>Зарегистрироваться</div>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </div>);
    }
}
