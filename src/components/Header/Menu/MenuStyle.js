import styled from "styled-components";

const MenuStyle = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1f1c2a;
  color: white;
  padding: 20px; 
  display: flex;
  line-height: 30px;

  div.Icon-Menu-contain {
    width: 41px;
    height: 34px;
    margin-right: 15px;

    img {
      height: 25px;
      object-fit: contain;
    }
  }

  @media (max-width: 500px) {
    padding: 15px;
    line-height: 30px;

    div.Icon-Menu-contain {
      width: 31px;
      height: 24px;
      margin-right: 15px;

      img {
        height: inherit;
        width: inherit;
        object-fit: contain;
      }
    }
  }
`;

export default MenuStyle;
