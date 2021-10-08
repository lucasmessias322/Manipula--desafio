import styled from "styled-components";

const MenuStyle = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1f1c2a;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  line-height: 30px;

  div {
    display: flex;

    div.Icon-Menu-contain {
      width: 41px;
      height: 34px;
      /* margin-right: 15px; */
      z-index: 999;

      img {
        height: 25px;
        object-fit: contain;
      }
    }

    @media (max-width: 500px) {
      /* line-height: 30px; */
      div {
        /* padding: 15px; */
        div.Icon-Menu-contain {
          width: 31px;
          height: 24px;
          /* margin-right: 15px; */

          img {
            height: inherit;
            width: inherit;
            object-fit: contain;
          }
        }
      }
    }
  }

  div.Favorits {
    padding-right: 50px;
    line-height: 10px;
    span {
      font-size: 10px;
      color:white;
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    div.Favorits {
      padding-right: 0px;

    }
  }
`;

export default MenuStyle;
