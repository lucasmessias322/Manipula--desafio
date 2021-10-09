import React from 'react'
import CardMusicaStyle from "./CardMusicaStyle"
import { FaPlay, FaPause, FaStar, FaHeadphones, FaInfo } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react/cjs/react.development';
import { Link } from "react-router-dom";

function CardMusica({to, AlbumName, Author, Duration, albumImage, PreviewSongAlbum, Rank, listenToFullMusic }) {
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
            <audio onEnded={() => setisPlaying(false)} ref={Audio} src={PreviewSongAlbum}></audio>
            <div className="DadosDaMusica">
                <span className="Author">{Author}</span>
                <span className="AlbumName" >{AlbumName}</span>
                <span className="Duration">Duration: {Duration} segundos</span>
                {/* <span className="Duration">Rank: {Rank}</span> */}
            </div>

            <div className="PlayerAndFavorite">
                <div className="circle" onClick={() => setisPlaying(!isPlaying)}>
                    {
                        isPlaying ?
                            <FaPause className="FaIcon" size={15} />
                            : <FaPlay className="FaIcon" size={15} />}
                </div>

                <div className="buttons-rigth">
                    <div className="circle">
                        <FaStar className="FaIcon" size={15} />

                    </div>

                    <div className="circle">
                        <a href={listenToFullMusic} target="_blank" >
                            <FaHeadphones className="FaIcon" size={15} />
                        </a>
                    </div>

                    <div className="circle">
                        <Link to={to}>
                            <FaInfo className="FaIcon" size={15} />
                        </Link>
                    </div>

                </div>
            </div>



        </CardMusicaStyle>


    )
}

export default CardMusica
