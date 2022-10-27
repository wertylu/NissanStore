import {Link, useLocation} from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../props/loader/Loader"
import "./SinglePage.css"

function SinglePage() {
    let { id } = useParams();

    const [loading, setloading] = useState(true)
    useEffect(() => { setTimeout(() => { setloading(false) }, 2000 )}, [])

    const [medicine, setMedicine] = useState({ id: 1, name: "not found", price: 0, power: 0, image: " ", description: " " })
    useEffect(() => { axios.get(`http://localhost:8080/catalog/${id}`).then(res => setMedicine(res.data)) }, [id])

    return (
        <>
            {loading ?
                <Loader />
                :
                <div className="drug">
                    <div className="page">
                        <div className="image"><img src={medicine.image} alt="Car"/></div>
                        <div className="content-drug">
                            <h1>{medicine.name}</h1>
                            <p>{medicine.description}</p>
                        </div>
                    </div>
                    <div className="footer-page">
                        <h3>price: {medicine.price}$</h3>
                        <h3>price: {medicine.power}$</h3>
                        <Link className="go-back" to='/catalog'><button>Go back</button></Link>
                        <button className="add-to-cart">Add to cart</button>
                    </div>
                </div >
            }
        </>
    )
}

export default SinglePage;
