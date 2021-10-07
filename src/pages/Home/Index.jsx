import React,{useState, useEffect} from 'react'
import CardMusicaContainer from '../../components/CardMusicaContainer'
import CardMusica from '../../components/CardMusica';
import HeaderComponent from '../../components/Header'
import axios from "axios";
import {getAlbums, getRank} from "../../actions"


function Home() {
    const [albums, setAlbums] = useState([])

    function handleSortByRank(a, b){
        if(a.rank >= b.rank){
              return 1
        }

        if(a.rank <= b.rank){
           return -1
        }

        return 0
      
    };

    useEffect(() => {
        // getRank(0).then(item => console.log(item))
        getAlbums().then(item => setAlbums(item))
    }, []);

    function renderAlbums() {
        return albums && albums.length ?
            albums.map((item, index) => (
                <CardMusica
                    AlbumName={item.title_short}
                    Author={item.artist.name}
                    Duration={item.duration}
                    albumImage={item.album.cover_big}
                    PreviewSongAlbum={item.preview}
                    Rank={item.rank}
                />
            )) : null;
    }



    const searchAlbums = (trem) => {
        getAlbums(trem).then(item => {
            setAlbums(item)
        })
    }

    console.log(albums);
    return (
        <div >
            <HeaderComponent
                searchBar={true}
                searchAlbums={searchAlbums}
            />

            <CardMusicaContainer
                // renderAlbums={renderAlbums}
                // albums={albums}
                // setAlbums={setAlbums}
            >
                {renderAlbums()}
            </CardMusicaContainer>

        </div>
    )
}

export default Home
