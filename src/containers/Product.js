import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Grid, Row, Col, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import Header from './Header';
import Utils from './Utils';
import Footer from './Footer';
import {
    Link
} from 'react-router';
//
import Comments from './Comments';

export class ProductData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col lg={6} className="productInfo">
                <div>
                    <img src={this.props.imgSrc} />
                </div>
                <div className="titleContainer">
                    <div className="title Navbar_ts">{`${this.props.title}`}</div>
                </div>
                <div className="costContainer">
                    <div className="cost Navbar_ts">{`${this.props.price} P`}</div>
                </div>
                <div className="descriptionContainer">
                    <div className="title">Описание товара</div>
                    <div className="description">{`${this.props.description}`}</div>
                </div>
                <div className="buttons">
                    <Button className="to_cart" onClick={this.props.onClick}>В корзину »</Button>
                </div>
            </Col>

        );
    }

}

export default class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: {
                title: "DatFace",
                price: "25",
                description: "The cuttiest doll on the planet. Just play with it and have some fun (or not, dummy)",
            },
            imgs: [
                {
                    original: "http://fabby.su/upload/003/u353/000/c5fc541d.jpg",
                    thumbnail: "http://fabby.su/upload/003/u353/000/c5fc541d.jpg"
                },
                {
                    original: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                    thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                },
                {
                    original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjeeT_HxBh6-9qu5tUW6pwTtnpa5rEo9nDv4HLgusuuRlE11w",
                    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjeeT_HxBh6-9qu5tUW6pwTtnpa5rEo9nDv4HLgusuuRlE11w"
                },
                {
                    original: "http://www.filinova.com/images/blog/2016.02_doll_harpy.jpg",
                    thumbnail: "http://www.filinova.com/images/blog/2016.02_doll_harpy.jpg"
                }
            ],
            comments: [
                {
                    name: 'Jud',
                    date: new Date().toLocaleTimeString(),
                    message: 'Sush a cool masterpiece. Keep it up!',
                    avatar: 'https://secure.gravatar.com/avatar/38f5dd72cb01ce54df79031585378927?s=48&default=http%3A%2F%2F24.kz%2Fcomponents%2Fcom_k2%2Fimages%2Fplaceholder%2Fuser.png'
                },
                {
                    name: 'Steeve',
                    date: new Date().toLocaleTimeString(),
                    message: 'Wow dude. What i am dooing here?',
                    avatar: 'https://secure.gravatar.com/avatar/38f5dd72cb01ce54df79031585378927?s=48&default=http%3A%2F%2F24.kz%2Fcomponents%2Fcom_k2%2Fimages%2Fplaceholder%2Fuser.png'
                },
                {
                    name: 'HolySh',
                    date: new Date().toLocaleTimeString(),
                    message: 'very cool stuff cool stuff right here yep real nice dolls man',
                    avatar: 'https://secure.gravatar.com/avatar/38f5dd72cb01ce54df79031585378927?s=48&default=http%3A%2F%2F24.kz%2Fcomponents%2Fcom_k2%2Fimages%2Fplaceholder%2Fuser.png'
                }
            ]
        };
        console.log(props.params.id);
        this.addToCart = this.addToCart.bind(this);
    }

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    addToCart(event) {
        var title = this.state.productData.title; //as key
        if (!localStorage.getItem(title)) {
            var productData = {
                price: this.state.productData.price,
                cartImg: this.state.imgs[1].original,
                // count: 1
            }
            var serialObj = JSON.stringify(productData);
            localStorage.setItem(title, serialObj);
        }
        /*
        else {
        var objForUp = JSON.parse(localStorage.getItem(title));
        objForUp.count++;
        var objForUpInString = JSON.stringify(objForUp);
        localStorage.setItem(title, objForUpInString);
        }
        */
    }
    async componentDidMount() {
        const auth = await Utils.Product(this.props.params.id);
        console.log(auth)
    }



    render() {

        const product = this.state.productData;
        const images = this.state.imgs

        return (
            <div>
                <Header />
                <Grid className="product_container">
                    <Row>
                        <Col lg={6}>
                            <ImageGallery
                                items={images}
                                slideInterval={2000}
                                onImageLoad={this.handleImageLoad} />
                        </Col>
                        <ProductData
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                    </Row>
                    <Comments comments={this.state.comments}/>
                </Grid>
                <Footer />
            </div>
        );
    }
}
