import React from 'react'
import CardMusicaStyle from "./CardMusicaStyle"
import { FaPlay, FaPause, FaStar } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react/cjs/react.development';



function CardMusica({ AlbumName, Author, Duration, albumImage, PreviewSongAlbum, Rank }) {
    const [isPlaying, setisPlaying] = useState(false)
    const Audio = useRef(null)
    function PlayORpause() {

    }

    useEffect(() => {
        if (isPlaying) {
            Audio.current.play()
        } else {
            Audio.current.pause()
        }
    }, [isPlaying])

   
    return (

        <CardMusicaStyle >
           
                <img src={albumImage} alt="" />
                <audio ref={Audio} src={PreviewSongAlbum}></audio>
                <div className="DadosDaMusica">
                    <span className="Author">{Author}</span>
                    <span className="AlbumName" >{AlbumName}</span>
                    <span className="Duration">Duration: {Duration} segundos</span>
                    <span className="Duration">Rank: {Rank}</span>
                </div>

                <div className="PlayerAndFavorite">
                    <div className="circle" onClick={() => setisPlaying(!isPlaying)}>
                        {
                            isPlaying ?
                                <FaPause className="FaIcon" size={15} />
                                : <FaPlay className="FaIcon" size={15} />}
                    </div>
                    <div className="circle">
                        <FaStar className="FaIcon" size={15} />
                    </div>

                </div>


           
        </CardMusicaStyle>


    )
}

export default CardMusica
