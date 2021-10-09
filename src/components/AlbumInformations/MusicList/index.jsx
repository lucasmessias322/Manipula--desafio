import React from 'react'
import styled from "styled-components";


function MusicList(props) {
    const MusicListStyle = styled.div`
   border-radius: 5px;
    margin-top: 30px;
    padding: 10px;
    background-color: rgba(47, 43, 60, 1)
`;
    return (
        <MusicListStyle>
            <ul>
                {props.children}
            </ul>
        </MusicListStyle>
    )
}

export default MusicList
