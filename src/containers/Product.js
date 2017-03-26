import React from 'react';
import ImageGallery from 'react-image-gallery';
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
                <h4> {this.props.description} </h4>
                <button onClick={this.addToCart}>
                    В КОРЗИНУ
                </button>   
            </div> 
        );
    }
   
}



export default class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                            productData:   {
                                                title: "SweetFace",
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
    }

handleImageLoad(event) {
    console.log('Image loaded ', event.target)
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
                </div>
            </div>
                    );
    }
}
