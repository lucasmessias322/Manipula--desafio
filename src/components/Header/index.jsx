import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import styled from 'styled-components'

function HeaderComponent({ searchBar, searchAlbums }) {

    const ContainerHeader = styled.div`
     width: 100%;
     position: fixed;
     box-shadow: 0 0 15px  #14131a;
 `;

    return (
        <ContainerHeader >
            <Menu />
            {searchBar ? <SearchBar searchAlbums={searchAlbums} /> : ""}

        </ContainerHeader>
    )
}

export default HeaderComponent
