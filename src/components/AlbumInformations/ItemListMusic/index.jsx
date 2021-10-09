import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaPlay, FaPause, FaStar, FaHeadphones } from "react-icons/fa";

function ItemListMusic({ Indice, MusicName, Song, listenToFullMusic }) {
    const [isPlaying, setisPlaying] = useState(false);
    const Audio = useRef(null);

    const ItemMusicListStyle = styled.li`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffffda;
    border-bottom: 0.5px solid #ffffff4e;

    span {
      font-size: 17px;
      margin-right: 15px;
    }

    .circle {
      border: 5px solid rgba(34, 31, 46, 0.87);
      width: 35px;
      height: 35px;
      border-radius: 100%;
      margin-right: 10px;
      background: linear-gradient(
        159.16deg,
        #593ec5 26.46%,
        rgba(99, 66, 232, 0) 116.55%
      );

      text-align: center;
      padding: 5px;
    }

    .buttons-rigth{
        display: flex;
    }
  `;

    useEffect(() => {
        if (isPlaying) {
            Audio.current.play();
        } else {
            Audio.current.pause();
        }
    }, [isPlaying]);

    return (
        <ItemMusicListStyle key={Indice}>
            <audio onEnded={() => setisPlaying(false)} ref={Audio} src={Song}></audio>
            <div>
                <span>{Indice}</span>
                <span>{MusicName}</span>
            </div>

            <div className="buttons-rigth">
                <div className="circle" onClick={() => setisPlaying(!isPlaying)}>
                    {isPlaying ? (
                        <FaPause className="FaIcon" size={15} />
                    ) : (
                        <FaPlay className="FaIcon" size={15} />
                    )}
                </div>

                <div className="circle">
                    <a style={{ textDecoration:"none", color: "white"}} href={listenToFullMusic} target="_blank" >
                        <FaHeadphones className="FaIcon" size={15} />
                    </a >
                </div>

            </div>
        </ItemMusicListStyle >
    );
}

export default ItemListMusic;
