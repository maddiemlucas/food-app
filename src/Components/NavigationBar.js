
import React from 'react';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.toggleOrderNowPopup(true);
    }

    render() {
        return (

            <div class="nav-bar">
                <h1 class="headers">   CONTOSO </h1>
                <div class="cart-and-order">
                    <h3> Shopping Cart: {this.props.cartSize} items</h3>
                    <button class="btn" type="button" onClick={() => this.handleClick()}>Order Now</button>
                </div>

            </div>

        );
    }
}

export default NavigationBar;