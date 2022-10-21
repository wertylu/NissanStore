import "./Item.css"
import { Link } from "react-router-dom";

export function Item(props){
    return(
        <div className="item">
            <img src={props.item.img} alt="pot"/>
            <h2>{props.item.name}</h2>
            <div className="info">
                <p>Price: {props.item.price}$</p>
                <p>Power: {props.item.power}hp</p>
                <Link className="link-to-SP" to='/car' state={{img: props.item.img, name: props.item.name,
                    price: props.item.price,power: props.item.power, description: props.item.description}}><button className="item-button">View More</button></Link>
            </div>
        </div>
    )
}

export default Item;