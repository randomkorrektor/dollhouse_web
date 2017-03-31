import React from 'react';
import Header from './Header';

export class ProductData extends React.Component {
               
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <img src={this.props.imgSrc} className="img-responsive" />
                <h1> {this.props.title} </h1>
                <h2> {this.props.price} </h2>
            </div> 
        );
    }
}

export default class ProductsPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                            productData: [
                                            {
                                                title: "DatFace",
                                                price: "25$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            },

                                            {
                                                title: "RapeFace2",
                                                price: "42$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            },

                                            {
                                                title: "CornFace3",
                                                price: "16$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            },

                                            {
                                                title: "BurnFace4",
                                                price: "31$",
                                                imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                productLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                            }
                                         ]
                        };
        this.addToCart = this.addToCart.bind(this);               
    }

 addToCart(number) {   
    
    var stateProductData = this.state.productData[number]
    var title = stateProductData.title //as key
    if (!localStorage.getItem(title))
    {
        var productData = {
        price: stateProductData.price,
        cartImg: stateProductData.imgSrc,
        //count: 1
        }
            var serialObj = JSON.stringify(productData);
            localStorage.setItem(title, serialObj);
        }
    //for more than one 
    /*
        else {
        var objForUp = JSON.parse(localStorage.getItem(title));
        objForUp.count++;
        var objForUpInString = JSON.stringify(objForUp);
        localStorage.setItem(title, objForUpInString);
    }
    */
}

        render() {
             const products = this.state.productData.map((product, i) =>
                    <div>
                    <ProductData 
                        key={i}
                        title={product.title}
                        price={product.price}
                        imgSrc={product.imgSrc}
                        productLink={product.productLink}
                     />
                     <button onClick={this.addToCart.bind(this, i)}>
                        В КОРЗИНУ
                    </button>   
                     </div>)

            return (<div>
                    {products}   
            </div>);
        }
}
