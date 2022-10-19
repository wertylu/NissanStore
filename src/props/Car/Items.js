import Item from "./Item"
import "./Item.css"

export function Items(props){
    return(
        <div className="main-chapter">
            {props.items.map(element =>(
                <Item key={element.id} item={element}/>
                ))}
        </div>
    )
}