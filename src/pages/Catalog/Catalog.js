import React from "react";
import {Items} from "../../props/Car/Items";

import "./Catalog.css"
class Catalog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Nissan GTR R-35 Kievracer',
                    power: 1400,
                    price: 150000,
                    img: "r35Kievracer.jpg"
                },
                {
                    id: 2,
                    name: 'GTR R-35 Smokey Nagata',
                    power: 1200,
                    price: 180000,
                    img: "r35Smokey.jpg"
                },
                {
                    id: 3,
                    name: 'Nissan GTR R-34',
                    power: 400,
                    price: 130000,
                    img: "r34.jpg"
                },
                {
                    id: 4,
                    name: 'Nissan GTR R-35',
                    power: 650,
                    price: 50000,
                    img: "r35.jpg"
                },
                {
                    id: 5,
                    name: 'Nissan GTR R-30',
                    power: 150,
                    price: 1300000,
                    img: 'r30.jpg'
                },
                {
                    id: 6,
                    name: 'Nissan GTR R-32',
                    power: 210,
                    price: 150000,
                    img: "r32.jpg"
                },
                {
                    id: 7,
                    name: 'Nissan GTR R-33',
                    power: 230,
                    price: 160000,
                    img: "r33.jpg"
                },
                {
                    id: 8,
                    name: 'Nissan Electric shit shitbox',
                    power: 1,
                    price: 2,
                    img: "nissan-third.jpg"
                },
            ]
        }
    }
    render() {
        return (
            <main-content>
                <aside>
                    <div className="searchSec">
                        <input type="text" id="search" placeholder="Search..." />
                        <button >Search</button> {/* onclick="searchCar()" */}
                    </div>
                    <h2>Sort by:</h2>
                    <div className="sortCat">
                        <input type="checkbox" id="name"  /> {/* onclick="sortByName()" */}
                        <label >name</label>{/* for="name" */}
                    </div>
                    <div className="sortCat">
                        <input type="checkbox" id="price"  />{/* onclick="sortByPrice()" */}
                        <label >price</label> {/* for="price" */}
                    </div>
                    <p>Total price: <span id="totalPrice"></span></p>
                </aside>
                <Items items={this.state.items} />
            </main-content>
        )
    }
}

export default Catalog;