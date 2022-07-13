
import React from 'react';

import '../App.css';

const TextStyle = { color: 'black' };

class OrderNow extends React.Component {
    constructor(props) {
        super(props);


    }
    handleClick = (item) => {

        this.props.removeFromCart(item);
    }



    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Order Summary</h1>

                    {this.props.cart.map((item) => (

                        <p> {item.name}: {item.display_price}     <button onClick={() => this.handleClick(item)}>Delete</button></p>

                    ))}
                    <h3> Order Total : ${(this.props.orderTotal) / 100}   </h3>

                    <button class="btn" onClick={this.props.clearCart}>Place Order</button>
                    <ul></ul>
                    <button class="exit-popup" onClick={this.props.closePopup}>Continue Shopping</button>
                </div>
            </div>
        );
    }
}

export default OrderNow;