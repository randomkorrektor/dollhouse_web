import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<footer className="footer">
            <Grid fluid={true}>
                <Row>
                    <Col lg={1}>
                        <img className="Logo_foot" src="/style/img/Le_Bona3.png" />
                    </Col>
                    <Col lg={3}>
                        <h2 className="Font_Caption">Где мы находимся:</h2>
                        <h3 className="Font_main">Россия, Новосибирская область, г.Куйбышев</h3>
                    </Col>
                    <Col lg={4}>
                        <Row className="show-grid">
                            <Col lg={6}>
                                <h2 className="Font_Caption">Напишите нам!</h2>
                                <input type="text" className="form-control  input_footer" placeholder="Ваше имя" />
                            </Col>
                            <Col lg={6}>
                                <input type="text" className="form-control  input_footer input_footer2" placeholder="Ваш E-mail" />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <textarea name="Test" className="form-control  input_footer inputmass" cols="30" placeholder="Текст сообщения"></textarea>
                                <div> <img id="Messent" src="/style/img/Messent.png" /></div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={12}>
                                <h2 className="Font_Caption">Мы в социальных сетях:</h2>
                                <a href="https://vk.com/" target="_blank"><img className="logofoot" src="/style/img/vk.png" />
                                </a>
                                <a href="https://ok.ru/" target="_blank"><img className="logofoot" src="/style/img/OK.png" />
                                </a>
                                <a href="https://www.livemaster.ru/" target="_blank"><img className="logofoot" src="/style/img/YM.png" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank"><img className="logofoot" src="/style/img/insta.png" />
                                </a>
                            </Col>
                        </Row>
                        <h2 className="Font_Caption" id="Copyrite">© Snar-team, 2017 г.</h2>
                    </Col>
                </Row>
            </Grid>
        </footer>);

    }
}
