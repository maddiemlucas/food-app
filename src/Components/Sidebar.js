import React from 'react';
import data from '../Data/data.json';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSelected: "All",
            menuItems: [],

        };
    }

    //@TODO render all items in the beginning before filtering selection is made 
    /* renderAllMenuItems() {
    //     var allItems = [];
    //     data.menus.map((menu) => (
    //         allItems.concat(menu.items)
    //     ));
    //     // this.setState = { menuItems: allItems };
    //     console.log(allItems);
    //     this.state.menuItems = allItems;
     }*/


    render() {
        return (
            <div class="sidebar">
                {data.menus.map((menu) => (
                    <div class="sidebar-links">
                        <a class="sidebar-links" href="#" onClick={() => this.props.setSelectedMenu(menu)}>{menu.name}</a>
                    </div>
                ))}
            </div>

        );
    }
}

export default Sidebar;