import React from 'react';
import logotype from "./../../icons/NissanLogo.png"
import "./Header.css"

function Header(){
    return(
        <header>
            <img src={logotype} className='logotype' alt='logotype'/>
            <h2>Nissan Store</h2>
            <nav className = "setOfBtns">
                <button className="But HomeBut"><a href="/">Home</a></button>
                <button className="But CatalogBut"><a href="/Catalog">Catalog</a></button>
                <button className="But CartBut"><a href="/Cart">Cart</a></button>
            </nav>
        </header>
    )
}

export default Header;