import React from 'react';
import ImageGallery from 'react-image-gallery';


export class CartElement extends React.Component {

    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>;
                <h2> {this.props.price} </h2>;
                <img src={this.props.imgSrc} className="img-responsive" />;
            </div>
        )
    }
}


export default class MyComponent extends React.Component {
 constructor(props) {
        super(props);
    }

    removeFromCart(number) {
        localStorage.removeItem(localStorage.key(number))
    }

    render() {
        
        //var product = JSON.parse(localStorage.getItem(localStorage(i))) 
        const product = [];
        const inCart = [];

        for (var j =0; j<localStorage.length; j++) {
            product[j] = JSON.parse(localStorage.getItem(localStorage.key(j))) 
        }
        for (var i =0; i<localStorage.length; i++)
        {
            inCart[i] = <div>
                            <CartElement
                                title={localStorage.key(i)}
                                price={product[i].price}
                                imgSrc={product[i].cartImg}
                            />
                            <button onClick={this.removeFromCart.bind(this, i)}>
                                Х
                            </button>   
                        </div>
        }
        //const inCart = this.state.productData.map((product, i) =>)
        return (<div>
                КОРЗИНА:
                {inCart}
        </div>);
    }
}

