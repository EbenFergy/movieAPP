import styled from "styled-components";

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 5rem 2rem;
  background-color: rgb(6, 6, 6);
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
      justify-content: center;
      height: 20rem;
      /* background-color: rgb(10, 23, 40); */
      /* background-color: rgba(10, 25, 10, 0.9); */
      /* background-color: rgba(145, 65, 145, 0.6); */
      overflow: hidden;
      border: 1px solid rgba(10, 25, 10, 1);
      border-radius: 5px;

      img {
        /* width: 100%; */
        height: 100%;
      }
    }
  }

  .sectionTitle {
    color: rgba(255, 255, 255, 0.8);
    font-family: Helvetica;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .sectionsStyle {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    /* border: 2px solid #ffffff; */
  }
`;

export default BodyStyle;
