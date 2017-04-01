import React from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import Header from './Header';
import Utils from './Utils';
import Footer from './Footer';
import {
    Link
} from 'react-router';


export class ProductData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col lg={4} className="item">
                <div>
                    <img src={this.props.imgSrc} />
                </div>
                <div className="titleContainer">
                    <span className="title Navbar_ts">{`"${this.props.title}"`}</span>
                </div>
                <div className="buttons">
                    <div className="cost">{`${this.props.price}, р.`}</div>
                    <Button className="to_cart" onClick={this.props.onClick}>В корзину »</Button>
                </div>
            </Col>
        );
    }
}


export default class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: []
        };
    }

    addToCart(number) {

        var stateProductData = this.state.productData[number]
        var _id = stateProductData._id //as key
        if (!localStorage.getItem(_id)) {
            var productData = {
                price: stateProductData.price,
                cartImg: stateProductData.imgSrc,
                //count: 1
            }
            var serialObj = JSON.stringify(productData);
            localStorage.setItem(_id, serialObj);
        }
    }

    async componentDidMount() {
        const auth = await Utils.Products();
        this.setState({
            productData: auth
        });
    }


    render() {
        const products = this.state.productData.map((product, i) =>
            <div>
                <ProductData
                    key={product._id}
                    title={product.name}
                    price={product.price}
                    imgSrc={product.pictures[0]}
                    productLink={product._id}
                    onClick={this.addToCart.bind(this, i)}
                />
            </div>)

        return (<div>
            <Header />
            <Grid className="shop_container">
                {products}
            </Grid>
            <Footer />
        </div>);
    }
}
