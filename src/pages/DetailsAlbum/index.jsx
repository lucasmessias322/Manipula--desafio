import React, { useEffect, useState } from 'react'
import HeaderComponent from "../../components/Header"
import AlbumInformations from "../../components/AlbumInformations"

import { getAlbum } from '../../actions'
import ArtistInfo from '../../components/AlbumInformations/ArtistInfo'
import MusicList from '../../components/AlbumInformations/MusicList'
import ItemListMusic from '../../components/AlbumInformations/ItemListMusic'

function DetailsAlbum({ match }) {
    const [dataAlbum, setDataAlbum] = useState({
        album: "",
        tracks: []
    })


    useEffect(() => {
        getAlbum(match.params.id).then(album => {
            setDataAlbum({
                album,
                tracks: album.tracks.data
            })
        })

    }, [])



    console.log(dataAlbum.album);

    function renderAlbum() {
        return (
            <ArtistInfo
                ArtistImage={dataAlbum.album.cover_big}
                ArtistName={dataAlbum.album.artist == undefined ? "undefined" : dataAlbum.album.artist.name}
                ArtistFans={dataAlbum.album.fans}
                ArtistMusics={""}
                DataCreationAlbum={dataAlbum.album.release_date}
            />
        )
    }

    return (
        <>
            <HeaderComponent />
            <AlbumInformations>
                {renderAlbum()}

                <MusicList>

                    {/* <ItemListMusic Indice={1} MusicName={"nome da musica"} /> */}
                    {
                        dataAlbum.tracks?.map((track, index) =>
                            <ItemListMusic 
                            Song={track.preview} 
                            listenToFullMusic={track.link} 
                            key={index} Indice={index} 
                            MusicName={track.title_short} />
                        )
                    }
                </MusicList>
            </AlbumInformations>
        </>
    )
}

export default DetailsAlbum
