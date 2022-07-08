import styled from "styled-components";
import headerImg from "../../assets/headerImg.webp";

const HeaderStyle = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 5rem;
  font-weight: 700;

  background: linear-gradient(
      rgba(10, 25, 10, 0.7),
      rgba(10, 25, 10, 0.9),
      /* rgba(10, 23, 40, 0.9), */ #000000
    ),
    url(${headerImg});

  /* background-repeat: no-repeat;
  background-size:cover ; */

  /* border-bottom: 0.5rem solid rgba(145, 65, 145, 0.2); */
`;

export default HeaderStyle;
// rgb(10, 23, 40)
