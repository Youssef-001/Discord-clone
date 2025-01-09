import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import logo from '../assets/l.jpeg';
import ProximaNova from '../assets/Demo_Fonts/Fontspring-DEMO-proximanova-light.otf';

// Global font-face definition
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNova}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const P = styled.p`
  color: #949BA4;
  font-family: 'Proxima Nova', Verdana, sans-serif; /* Fallback fonts */
  font-size: 1.1rem;
  font-weight: 600;
`;

function FriendCard({ avatar = logo, name, status }) {
  return (
    <>
      <GlobalStyle />
      <Div>
        <Img src={logo} alt="" />
        <P>{name}</P>
      </Div>
    </>
  );
}

export default FriendCard;
