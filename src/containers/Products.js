import React from 'react';
import Header from './Header';
import {
    Link
} from 'react-router';


export class ProductData extends React.Component {
               
    constructor(props) {
        super(props);
    }

    addToCart(event)
    {

    }

    render () {
        return (
            <div>
                <img src={this.props.imgSrc} className="img-responsive" />
                <h1> {this.props.title} </h1>
                <h2> {this.props.price} </h2>
                <button onClick={this.addToCart}>
                    В КОРЗИНУ
                </button>   
            </div> 
        );
    }
   
}

export default class ProductsPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                            ProductData: [
                                            {
                                                title: "SweetFace",
                                                price: "25$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            },

                                            {
                                                title: "SweetFace2",
                                                price: "42$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            },

                                            {
                                                title: "SweetFace3",
                                                price: "16$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            },

                                            {
                                                title: "SweetFace4",
                                                price: "31$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            }
                                         ]
                        };
        }

        render() {

             const products = this.state.ProductData.map((product, i) =>
    
                    <ProductData 
                        key={i}
                        title={product.title}
                        price={product.price}
                        imgSrc={product.imgSrc}
                        productLink={product.productLink}
                     />)

            return (<div>
                    {products}
            </div>);
        }
    
}
