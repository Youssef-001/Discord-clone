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

const Button = styled.button`
all:unset;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  cursor:pointer;
  

    &:hover{
  background-color:#35383C
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;

  &::before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${({ status }) =>
      status === 'ONLINE' ? '#539751' :
      status === 'INVISIBLE' ? '#71747D' :
      status === 'IDLE' ? '#E4A92F' :
      status === 'DND' ? '#CA443A' :
      'transparent'}; /* Default to transparent if no status matches */
    bottom: 0;
    right: 0;
    z-index: 1;
  }


`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const P = styled.p`
  color: #9196A0;
  font-family: 'Proxima Nova', Verdana, sans-serif; /* Fallback fonts */
  font-size: 1.1rem;
  font-weight: 600;
`;

function FriendCard({ avatar = logo, name, status }) {
  return (
    <>
      <GlobalStyle />
      <Button>
        <ImgContainer status={status}>
          <Img src={logo} alt="" />
        </ImgContainer>
        <P>{name}</P>
      </Button>
    </>
  );
}

export default FriendCard;
