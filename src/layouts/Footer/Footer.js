import React from 'react';
import facebook from './../../icons/Facebook.svg'
import instagram from './../../icons/Instagram.svg'
import linkedin from './../../icons/LinkedIn.svg'
import youtube from './../../icons/Youtube.svg'
import twitter from './../../icons/Twitter.svg'
import logotype from "./../../icons/NissanLogo.png"
import "./Footer.css"

let rickroll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'

function Footer(){
    return(
        <footer>
                <div className="top-footer">
                    <p className="all-rights-reserved">©2022 Nissan Store. All rights reserved</p>
                    <img src={logotype} className='logotype' alt='logotype'/>
                </div>
            <div className="strikethrough">
                <svg width="1500" height="20" className="wtf">
                    <rect width="1500" height="1" />
                </svg>
            </div>
            <div className="social-media">
                <a href={rickroll} className="link" target="_blank" rel="noreferrer">
                    <img src={instagram} className="icon" alt=""/>
                </a>
                <a href={rickroll} className="link" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt=""/>
                </a>
                <a href={rickroll} className="link" target="_blank" rel="noreferrer">
                    <img src={youtube} alt="" />
                </a>
                <a href={rickroll} className="link" target="_blank" rel="noreferrer">
                    <img src={twitter} alt=""/>
                </a>
                <a href={rickroll} className="link" target="_blank" rel="noreferrer">
                    <img src={facebook} alt=""/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;