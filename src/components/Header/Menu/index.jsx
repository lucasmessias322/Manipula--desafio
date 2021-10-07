import React from 'react'
import MenuStyle from './MenuStyle'
import {FaBars} from "react-icons/fa"
import MenuHamburguer from "../../../assets/MenuHamburguer.png";


function Menu() {
    return (
        <MenuStyle>
           <div className="Icon-Menu-contain">
               <img src={MenuHamburguer} alt="" />
           </div>

           <h3>Music Preview</h3>
        </MenuStyle>
    )
}

export default Menu
