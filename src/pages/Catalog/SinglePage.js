import {Link, useLocation} from "react-router-dom"
import "./SinglePage.css"

function SinglePage() {
    const location = useLocation();
    const itm = location.state;

    return (
        <div>
             <><div className="page">
                    <div className="image"><img src={itm.img} alt="lol" /></div>
                    <div className="content-car">
                        <h1>{itm.name}</h1>
                        <p>{itm.description}</p>
                    </div>
                </div>
                    <div className="footer-page">
                        <h2>Price: {itm.price}$</h2>
                        <h2>Power: {itm.power}HP</h2>
                        <Link to="/Catalog"> <button className="But">Go back</button></Link>
                        <button className="But">Add to cart</button>
                    </div>
                </>

        </div>
    )
}

export default SinglePage;
