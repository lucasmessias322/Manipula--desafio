import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import {  FaStar } from "react-icons/fa";

function HeaderComponent({ searchBar, searchAlbums }) {
const [menuToogleOpen, setMenuToogleOpen] = useState(false);


    const ContainerHeader = styled.div`
    z-index: 99;
     width: 100%;
     position: fixed;
     box-shadow: 0 0 15px  #14131a;
     transition: 1s;
 `;

    const ToogleMenu = styled.div`
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index: 99;
        background-color: #110f16bc;
        opacity: ${props => props.display ? "1": "0"};
        display: ${props => props.display ? "block": "none"};

      
       

        div{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            max-width: 400px;
            background-color: #2b2837;
            

            ul{
                width: 100%;
                margin: 65px 0px;
                border-top: 0.3px solid #ffffff1c;

                li{
                    display: flex;
                    color: white;
                    font-weight: bold;
                    padding: 15px 10px;
                    width: 100%;
                    margin: 10px 0px;
                    border-bottom: 0.1px solid  #5e30c160;
                    font-size: 17px;

                    h3{
                        margin:0px 0px 0px 10px;
                      
                    } 
                    span{
                            font-size: 15px;
                            margin:0px 10px 0px 5px;
                            color: #a981ff;
                          
                        }
                }
            }
        }
    `

    return (
        <ContainerHeader >
            <Menu setMenuToogleOpen={setMenuToogleOpen} menuToogleOpen={menuToogleOpen} />
            {searchBar ? <SearchBar searchAlbums={searchAlbums} /> : ""}

            <ToogleMenu display={menuToogleOpen} >
                <div>

                    <ul>
                        
                        <li>
                            <FaStar color="#8c5afa" />
                            <h3>Favoritos</h3>
                            <span>10</span>
                            
                        </li>
                    </ul>
                </div>
            </ToogleMenu> 

        </ContainerHeader>
    )
}

export default HeaderComponent
