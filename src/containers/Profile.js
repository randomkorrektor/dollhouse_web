import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Utils from './Utils';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
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
    render() {
        return (<div>
            <Header />
            <Grid className="profile_container">
                <Row className="avatar">
                    <Col lg={1} />
                    <Col lg={4}>
                        <img src={this.state.user.picture} />
                        <div className="dimmer"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={4}>
                        <input value={this.state.user.name} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={4}>
                        <input value={this.state.user.address} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={4}>
                        <button>Save</button>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </div>);
    }
}

