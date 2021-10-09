import React from 'react'
import AlbumInfoContainer from './style'


function AlbumInformations(props) {

    return (
        <AlbumInfoContainer>
          

            {props.children}
            
        </AlbumInfoContainer>
    )
}

export default AlbumInformations
