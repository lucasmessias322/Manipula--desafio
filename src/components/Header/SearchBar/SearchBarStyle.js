import styled from "styled-components";

const SearchBarStyle = styled.div`
  width: 100%;
  background-color: #2b2837;
  padding: 15px;
  display: flex;
  margin: auto;
  justify-content: center;

  div {
    display: flex;

    div.TipoDePesquisa-contain {
      background: #5f30c1;
      height: 40px;
      width: 100px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding: 10px 0px;
      text-align: center;
      overflow: hidden;
      color: white;
      font-size: 18px;
    }

    div.Options {
      text-align: center;
      background: #5f30c1;
      padding: 10px;
      color: white;
      font-size: 18px;
      box-shadow: 0 0 10px black;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: fixed;
      display: none;

      span {
        padding: 10px;

        &:hover {
          background: #47268b;
        }
      }
    }
  }

  input {
    height: 40px;
    width: 550px;
    border: none;
    outline: none;
    color: grey;
    font-size: 16px;
    padding: 5px;
    border-radius: 10px;
  }

  button {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    padding: 6px;
    margin: 0px 10px;
    background: #2b2837;

    img {
      height: 20px;
      width: 20px;
      object-fit: contain;
    }
  }

  @media (max-width: 500px) {  
    padding-left: 5px;
    padding-right: 0px;

    div {
      div.TipoDePesquisa-contain {
        background: #5f30c1;
        height: 40px;

        width: 75px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      div.Options {
        text-align: center;
        background: #5f30c1;
        padding: 10px;
        color: white;
        font-size: 18px;
      }
    }

    input {
      height: 40px;
      width: 280px;
      border: none;
      outline: none;
      color: grey;
      font-size: 16px;
      padding: 5px;
      border-radius: 5px;
    }
    button {
      height: 40px;
      width: 40px;
      padding: 8px;
    }
  }
`;

export default SearchBarStyle;
