import {Link, useParams} from "react-router-dom"
import "./SinglePage.css"
import axios from "axios";
import {useEffect, useState} from "react";
import Loader from "../../props/loader/Loader";

function SinglePage() {
    let { id } = useParams();

    const [loading, setLoading] = useState(true)
    useEffect(() => { setTimeout(() => { setLoading(false) }, 2000 )}, [])

    const [itm, setItm] = useState({ id: 1, name: "not found", price: 0, image: " ", description: " " })
    useEffect(() => { axios.get(`http://localhost:8080/catalog/${id}`).then(res => setItm(res.data)) }, [id])


    return (
        <>
            {loading ?
                <Loader/>
                :
                <div>
                    <div className="page">
                        <div className="image"><img src={itm.image} alt="lol"/></div>
                        <div className="content-car">
                            <h1>{itm.name}</h1>
                            <p>{itm.description}</p>
                        </div>
                    </div>
                    <div className="footer-page">
                        <h2>Price: {itm.price}$</h2>
                        <h2>Power: {itm.power}HP</h2>
                        <Link to="/Catalog">
                            <button className="But">Go back</button>
                        </Link>
                        <button className="But">Add to cart</button>
                    </div>
                </div>
            }
        </>
    )
}

export default SinglePage;
