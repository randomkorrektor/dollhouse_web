import React from 'react';
import ImageGallery from 'react-image-gallery';
import Header from './Header';
import {
    Link
} from 'react-router';
//
import Comments from './Comments';

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
                <h4> {this.props.description} </h4>
            </div> 
        );
    }
   
}

export default class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                            productData:   {
                                                title: "DatFace",
                                                price: "25$",
                                                description: "The cuttiest doll on the planet. Just play with it and have some fun (or not, dummy)",
                                            },  
                            imgs: [ 
                                                            {
                                                              original: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg",
                                                              thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn9tUr2djnjXjjxWGSXhQYhb_rI-s1uBg-fS4h-zrs48aKfwqOMg"
                                                            },
                                                            {  
                                                              original: "http://fabby.su/upload/003/u353/000/c5fc541d.jpg", 
                                                              thumbnail: "http://fabby.su/upload/003/u353/000/c5fc541d.jpg"
                                                            },
                                                            {
                                                              original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjeeT_HxBh6-9qu5tUW6pwTtnpa5rEo9nDv4HLgusuuRlE11w",
                                                              thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjeeT_HxBh6-9qu5tUW6pwTtnpa5rEo9nDv4HLgusuuRlE11w"
                                                            },
                                                            {
                                                              original: "http://www.filinova.com/images/blog/2016.02_doll_harpy.jpg",
                                                              thumbnail: "http://www.filinova.com/images/blog/2016.02_doll_harpy.jpg"
                                                            }
                                  ]
        }
      this.addToCart = this.addToCart.bind(this);
    }

handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
       
addToCart(event) {   
    var title = this.state.productData.title; //as key
    if (!localStorage.getItem(title))
    {
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

        render() {

            const product = [];
            const images = this.state.imgs
            
             return (
             <div>

                 <div>
                    <ImageGallery
                    items={images}
                    slideInterval={2000}
                    onImageLoad={this.handleImageLoad}/>
                 </div>

                 <div>
                        <ProductData
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                        <button onClick={this.addToCart}>
                        В КОРЗИНУ
                        </button> 
                </div>

                {/* Надпись комментарии внутри собственно Comments */}
                <Comments />

            </div>
                    );
    }
}
