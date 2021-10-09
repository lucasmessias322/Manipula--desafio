import React from 'react'
import ArtistInfoStyle  from "./style"

function ArtistInfo({ ArtistImage, ArtistName, ArtistFans, ArtistMusics, DataCreationAlbum}) {
    
    return (
        <ArtistInfoStyle >
            <img src={ArtistImage} alt="" />
            <div className="dadosDoArtista">
                <h3>{ArtistName}</h3>
                <h4>{ArtistFans} fãs</h4>
                <h4>Musicas: {ArtistMusics}</h4>
                <h4>Data de criação: {DataCreationAlbum}</h4>
            </div>
        </ArtistInfoStyle>
    )
}

export default ArtistInfo
