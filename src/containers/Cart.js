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
        this.state = {
            inCart: []
        }
      this.removeFromCart = this.removeFromCart.bind(this);   
    }

    removeFromCart(number) {
        const key = localStorage.key(number)
        const inCart = this.state.inCart;
        for (var i=number; i<localStorage.length; i++) {
            var take = inCart[i]
            inCart[i] = inCart[i+1]
            inCart[i+1] = take
        }
        inCart.pop()
        localStorage.removeItem(key)
        console.log(inCart.length)
        this.setState({
            inCart
        });
    }

    render() {
        var product = [];
        for (var j =0; j<localStorage.length; j++) {
            product[j] = JSON.parse(localStorage.getItem(localStorage.key(j))) 
        }
        for (var i =0; i<localStorage.length; i++)
        {
            this.state.inCart[i] = <div>
                            <CartElement
                                title={localStorage.key(i)}
                                price={product[i].price}
                                imgSrc={product[i].cartImg}
                            />
                            <button onClick={this.removeFromCart.bind(this, i)}>
                                Х {/*Кнопка remove покупку*/}
                            </button>   
                        </div>
        }
        return (<div>
                КОРЗИНА:
                {this.state.inCart}
        </div>);
    }
}

