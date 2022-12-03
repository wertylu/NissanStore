import React, {useEffect, useState} from "react";
import Item from "../../props/Car/Item";

import "./Catalog.css"
import axios from "axios";
import Loader from "../../props/loader/Loader";


function Catalog(){
    const [cars, setCars] = useState([{ id: 1, name: 'Not found', price: 0, power:0, image: '', description: '' }])
    useEffect(() => { axios.get('http://localhost:8080/catalog/').then(result => setCars(result.data)) }, []);

    const [value, setValue] = useState('')

    const filteredItems = cars.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    const [loading, setLoading] = useState(true)
    useEffect(() => {setTimeout(() => {setLoading(false)}, 1000)}, [])


    return (
        <>
            {loading ?
                <Loader />
                :
                <main-content>
                    <aside>
                        <div className="searchSec">
                            <input type="text" id="search" placeholder="Search..." onChange={(event) => setValue(event.target.value)} />
                        </div>
                        <h2>Sort by:</h2>
                        <div className="sortCat">
                            <ul>
                                <li><a href="/sortedCatalogByName">name</a></li>
                                <li><a href="/sortedCatalogByPrice">price</a></li>
                                <li><a href="/sortedCatalogByPower">power</a></li>
                            </ul>
                        </div>
                    </aside>
                    <div className="main-chapter">
                        {
                            filteredItems.map((item, index) => {
                                return (
                                    <Item item={item} key={index} />
                                )
                            })
                        }
                    </div>
                </main-content>
            }
        </>
    )

}



export default Catalog;