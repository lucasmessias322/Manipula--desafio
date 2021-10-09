import styled from "styled-components";

const ArtistInfoStyle = styled.div`
width: 100%;
    height: 100%;
    margin: 10px;
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    align-items: center;

    img {
      box-shadow: 0 0 40px #5f30c1;
      border: 10px solid #5f30c1;
      border-radius: 100%;
      width: 250px;
      height: 250px;
      object-fit: cover;
    }

    .dadosDoArtista{
        margin-left: 25px;

        h3{
            font-size: 25px;
            color:rgba(122, 114, 152, 1);
;
        }

        h4{
            font-size: 17px;
            color: rgba(90, 84, 108, 1);
;
        }
        /* width: 100%; */
        /* max-width:100px; */
    }
`

export default ArtistInfoStyle