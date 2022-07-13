
import React from 'react';
import '../App.css';


class FoodCards extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
        this.state = {
            menuItems: this.props.menuItems,
            menuSelected: this.props.menuSelected
        }

    }

    handleClick = (item) => {
        this.props.addToCart(item);
    }

    render() {
        return (

            <div class="food-items-container" >

                {this.props.menuItems.map((item) => (
                    <div class="card" >
                        <img class="img-item" src={item.picture_url} />
                        <div class="food-description">
                            <h4 class="food-name">{item.name}</h4>
                            <p class="price"> {item.display_price}</p>
                            <a class="add-to-cart" href="#" onClick={() => this.handleClick(item)}> + Add</a>
                        </div>

                    </div>
                ))}

            </div>

        );
    }
}

export default FoodCards;