import React, { useEffect, useState } from 'react'
import SearchBarStyle from './SearchBarStyle'
import SeachingIcon from "../../../assets/SeachingIcon.png"


function SearchBar({ searchAlbums }) {
    const [TipoDePesquisaAtual, setTipoDePesquisaAtual] = useState("Musica")
    const [search, setSearching] = useState()


    // function handleDisplay(typeSearch) {
    //     let Options = document.querySelector("div.Options");

    //     if (Options.style.display == "none") {
    //         Options.style.display = "flex"
    //     } else {
    //         Options.style.display = "none"
    //     }
    // }

    // function handleChangeTypeSearch(typeSearch) {
    //     setTipoDePesquisaAtual(typeSearch)
    // }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        searchAlbums(search)
    }

    return (
        <SearchBarStyle>
            {/* <div>
               <div className="TipoDePesquisa-contain" onClick={() => handleDisplay()}>
                    <span>{TipoDePesquisaAtual}</span>

                </div> 
               <div className="Options">
                    <span onClick={() => handleChangeTypeSearch("Musica")}>Musica</span>
                    <span onClick={() => handleChangeTypeSearch("Album")}>Album</span>
                </div> 
            </div> */}

            <form onSubmit={e => handleSubmitSearch(e)}>
                <input
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={e => setSearching(e.target.value)}
                />
                <button><img src={SeachingIcon} alt="" /></button>

            </form>

        </SearchBarStyle>
    )
}

export default SearchBar
