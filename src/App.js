import './App.css';
import NavigationBar from './Components/NavigationBar';
import FoodCards from './Components/FoodCards';
import Sidebar from './Components/Sidebar';
import React from 'react';
import OrderNow from './Components/OrderNow';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.setSelectedMenu = this.setSelectedMenu.bind(this);
    this.toggleOrderNowPopup = this.toggleOrderNowPopup.bind(this);

    this.state = {
      cart: [],
      cartSize: 0,
      orderNow: false,
      menuSelected: '',
      menuItems: [],
      orderTotal: 0
    }
  }

  addToCart(item) {

    var newCart = this.state.cart;
    newCart.push(item);
    var newSize = newCart.length;
    this.setState({ cart: newCart, cartSize: newSize });
    var newTotal = this.state.orderTotal + item.price;
    this.setState({ orderTotal: newTotal });

  }

  removeFromCart(item) {

    var newCart = this.state.cart;
    var indexToRemove;
    for (let i = 0; i < this.state.cart.length; i++) {
      if (newCart[i].name.localeCompare(item.name) == 0) {

        indexToRemove = i;
      }
    }
    newCart.splice(indexToRemove, 1);
    var newSize = newCart.length;
    this.setState({ cart: newCart, cartSize: newSize });

    var newTotal = this.state.orderTotal - item.price;
    this.setState({ orderTotal: newTotal });
  }

  setSelectedMenu(menu) {

    this.setState({ menuSelected: menu.name });
    this.state.menuItems = menu.items;
  }

  toggleOrderNowPopup(bool) {
    this.setState({ orderNow: !this.state.orderNow });
  }

  clearCart() {
    this.setState({ cart: [], cartSize: 0, orderNow: false, orderTotal: 0 });
  }
  render() {
    return (
      <div className="App" >

        {/* determine if order now popup should overlay the main page */}
        {this.state.orderNow ?
          <OrderNow
            removeFromCart={this.removeFromCart}
            closePopup={this.toggleOrderNowPopup.bind(this)}
            cart={this.state.cart}
            orderTotal={this.state.orderTotal}
            clearCart={this.clearCart}
          />
          : null
        }

        <NavigationBar cartSize={this.state.cartSize} toggleOrderNowPopup={this.toggleOrderNowPopup}></NavigationBar>
        <Sidebar addToCart={this.addToCart} setSelectedMenu={this.setSelectedMenu} ></Sidebar >
        <div  >
          <FoodCards key={this.state} menuSelected={this.state.menuSelected} menuItems={this.state.menuItems} addToCart={this.addToCart} />
        </div>

      </div >
    );
  }
}

export default App;
