import styled from "styled-components";

const CardMusicaStyle = styled.div`
  box-shadow: 40px 30px 80px #0d0b11;
  width: 100%;
  max-width: 250px;
  border-radius: 15px;
  margin: 10px;
  background-color: #2b2837;
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    /* height: inherit; */
    width: 100%;
    object-fit: contain;
  }

  div.DadosDaMusica {
    padding: 10px;
    border-bottom: 1px solid rgba(170, 144, 222, 0.27);
    display: flex;
    justify-content: center;
    flex-direction: column;

    span {
      font-weight: bold;
      font-size: 15px;
      margin: 2px;
    }

    span.AlbumName {
      color: #5a546c;
    }

    span.Author {
      font-size: 17px;
      color: #7a7298;
    }

    span.Duration {
      color: #5a546c;
    }
  }

  div.PlayerAndFavorite {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .circle {
      border: 5px solid rgba(34, 31, 46, 0.87);
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: linear-gradient(
        159.16deg,
        #593ec5 26.46%,
        rgba(99, 66, 232, 0) 116.55%
      );

      text-align: center;
      padding: 7.5px;

      .FaIcon {
        color: white;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    .buttons-rigth{
      display: flex;
    }
  }

  @media (max-width: 500px) {
    max-width: 100%;
    border-radius: 15px;
    margin: 10px;
    background-color: #2b2837;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export default CardMusicaStyle;
