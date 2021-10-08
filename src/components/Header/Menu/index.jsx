import React from 'react'
import MenuStyle from './MenuStyle'
import { FaBars, FaStar } from "react-icons/fa"
import MenuHamburguer from "../../../assets/MenuHamburguer.png";


function Menu({ setMenuToogleOpen, menuToogleOpen }) {
    return (
        <MenuStyle>
            <div>
                <div className="Icon-Menu-contain" onClick={() => setMenuToogleOpen(!menuToogleOpen)}>
                    <img src={MenuHamburguer} alt="" />
                </div>

                <h3>Music Preview</h3>
            </div>

            <div className="Favorits">
                <FaStar color="#8c5afa" size={25} />
                <span>10</span>
            </div>


        </MenuStyle>
    )
}

export default Menu
