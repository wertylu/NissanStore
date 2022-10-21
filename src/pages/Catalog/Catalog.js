import React, {useState} from "react";
import Item from "../../props/Car/Item";

import "./Catalog.css"


function Catalog(){
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Nissan GTR R-35 Kievracer',
            power: 1400,
            price: 155000,
            img: "r35Kievracer.jpg",
            description: "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan," +
                " unveiled in 2007. It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline. Although" +
                " this car was the sixth-generation model to bear the GT-R name, the model is no longer part of the Nissan Skyline model" +
                " line up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed" +
                " Nissan PM platform, which is an enhanced evolution of the Nissan FM platform used in the separate Nissan Skyline luxury" +
                " car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R."
        },
        {
            id: 2,
            name: 'GTR R-35 Smokey Nagata',
            power: 1200,
            price: 180000,
            img: "r35Smokey.jpg",
            description: "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan," +
                " unveiled in 2007. It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline. Although" +
                " this car was the sixth-generation model to bear the GT-R name, the model is no longer part of the Nissan Skyline model" +
                " line up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed" +
                " Nissan PM platform, which is an enhanced evolution of the Nissan FM platform used in the separate Nissan Skyline luxury" +
                " car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R."
        },
        {
            id: 3,
            name: 'Nissan GTR R-34',
            power: 400,
            price: 130000,
            img: "r34.jpg",
            description: "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan," +
                " unveiled in 2007. It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline. Although" +
                " this car was the sixth-generation model to bear the GT-R name, the model is no longer part of the Nissan Skyline model" +
                " line up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed" +
                " Nissan PM platform, which is an enhanced evolution of the Nissan FM platform used in the separate Nissan Skyline luxury" +
                " car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R."
        },
        {
            id: 4,
            name: 'Nissan GTR R-35',
            power: 650,
            price: 50000,
            img: "r35.jpg",
            description: "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan," +
                " unveiled in 2007. It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline. Although" +
                " this car was the sixth-generation model to bear the GT-R name, the model is no longer part of the Nissan Skyline model" +
                " line up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed" +
                " Nissan PM platform, which is an enhanced evolution of the Nissan FM platform used in the separate Nissan Skyline luxury" +
                " car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R."
        },
        {
            id: 5,
            name: 'Nissan GTR R-30',
            power: 150,
            price: 1300000,
            img: 'r30.jpg',
            description: "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan," +
                " unveiled in 2007. It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline. Although" +
                " this car was the sixth-generation model to bear the GT-R name, the model is no longer part of the Nissan Skyline model" +
                " line up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed" +
                " Nissan PM platform, which is an enhanced evolution of the Nissan FM platform used in the separate Nissan Skyline luxury" +
                " car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R."
        },
        {
            id: 6,
            name: 'Nissan GTR R-32',
            power: 210,
            price: 150000,
            img: "r32.jpg",
            description: "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan," +
                " unveiled in 2007. It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline. Although" +
                " this car was the sixth-generation model to bear the GT-R name, the model is no longer part of the Nissan Skyline model" +
                " line up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed" +
                " Nissan PM platform, which is an enhanced evolution of the Nissan FM platform used in the separate Nissan Skyline luxury" +
                " car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R."
        },
        {
            id: 7,
            name: 'Nissan GTR R-33',
            power: 230,
            price: 160000,
            img: "r33.jpg",
            description: "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan," +
                " unveiled in 2007. It is the successor to the Skyline GT-R, a high performance variant of the Nissan Skyline. Although" +
                " this car was the sixth-generation model to bear the GT-R name, the model is no longer part of the Nissan Skyline model" +
                " line up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed" +
                " Nissan PM platform, which is an enhanced evolution of the Nissan FM platform used in the separate Nissan Skyline luxury" +
                " car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R."
        },
        {
            id: 8,
            name: 'Nissan Electric shit shitbox',
            power: 1,
            price: 2,
            img: "nissan-third.jpg",
            description: "just shitbox"
        }
    ])

    const sortByPrice = (arr) => {
        return arr.sort((a, b) =>
            a.price < b.price ? 1 : -1
        );
    };

    const handleSortByPrice = () => {
        document.querySelector('#name').checked = false;
        document.querySelector('#power').checked = false;
        setItems(prevItems => sortByPrice([...prevItems])
        )
    };


    const sortByPower = (arr) => {
        return arr.sort((a, b) =>
            a.power < b.power ? 1 : -1
        );
    };

    const handleSortByPower = () => {
        document.querySelector('#name').checked = false;
        document.querySelector('#price').checked = false;
        setItems(prevItems => sortByPower([...prevItems])
        )
    };


    const sortByName = (arr) => {
        return arr.sort((a, b) =>
            a.name > b.name ? 1 : -1
        );
    };

    const handleSortByName = () => {
        document.querySelector('#price').checked = false;
        document.querySelector('#power').checked = false;
        setItems(prevItems => sortByName([...prevItems])
        )};


    const resetDefaultsBase = (arr) =>{
        return arr.sort((a,b)=> a.id>b.id ? 1: -1);
    }

    const resetDefaults = () =>{
        document.querySelector('#name').checked = false;
        document.querySelector('#price').checked = false;
        document.querySelector('#power').checked = false;
        setItems(prevItems => resetDefaultsBase([...prevItems]))
    }


    const [value, setValue] = useState('')

    const filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <main-content>
            <aside>
            <div className="searchSec">
                <input type="text" id="search" placeholder="Search..." onChange={(event) => setValue(event.target.value)}/>
            </div>
            <h2>Sort by:</h2>
            <div className="sortCat">
                <input type="checkbox" id="name" onClick={handleSortByName} />
                <label htmlFor="name">name</label>
            </div>
            <div className="sortCat">
                <input type="checkbox" id="price" onClick={handleSortByPrice} />
                <label htmlFor="price">price</label>
            </div>
            <div className="sortCat">
                <input type="checkbox" id="power" onClick={handleSortByPower} />
                <label htmlFor="power">power</label>
            </div>
            <div className="sortCat">
                <button className= "button-reset" onClick={resetDefaults}>Reset checks</button>
            </div>
        </aside>
            <div className="main-chapter">
                {
                    filteredItems.map((item, index) =>{
                        return (
                            <Item item={item} key={index} />
                        )
                    })
                }

            </div>
        </main-content>
    )
}



export default Catalog;