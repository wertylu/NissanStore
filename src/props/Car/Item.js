import "./Item.css"

export function Item(props){
    return(
        <div className="item">
            <img src={props.item.img} alt="pot"/>
            <h2>{props.item.name}</h2>
            <div className="info">
                <p>Price: {props.item.price}$</p>
                <p>Power: {props.item.power}hp</p>
                <button className="item-button">View More</button>
            </div>
        </div>
    )
}

export default Item;