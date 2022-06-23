import styled from "styled-components";

const BodyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  /* border: 2px solid red; */

  .movieBody {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 60px 15px;
    justify-content: center;
    /* border: 2px solid yellow; */
    margin: 0;
    max-width: 100vw;
    box-sizing: border-box;

    div {
      display: flex;
      align-items: center;
      height: 20rem;
      background-color: #0a1728;
      overflow: hidden;
      /* border: 2px solid green; */

      img {
        width: 100%;
      }
    }
  }
`;

export default BodyStyle;
