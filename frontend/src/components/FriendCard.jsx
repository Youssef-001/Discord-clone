import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import logo from '../assets/l.jpeg';
import ProximaNova from '../assets/Demo_Fonts/Fontspring-DEMO-proximanova-light.otf';

import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

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
  background-color:#35383C;

  
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

const SVG = styled.svg`width: 2rem; height: 2rem; color:white;`

const AcceptButton = styled.button`

all:unset;
border-radius: 50%;
background-color: #2B2D31;
padding: 0.3rem;

&:hover{
 svg {
      color: #529552; /* Change the color of the SVG */
}}

svg{
color:#fff}
`

const DeclineButton = styled.button`

all:unset;
border-radius: 50%;
background-color: #2B2D31;
padding: 0.3rem;

&:hover{
 svg {
      color: #529552; /* Change the color of the SVG */
}}

svg{
color:#fff}
`

async function AcceptRequest(id)
{
  let token = localStorage.getItem('token');
  console.log(token);

  let request = await fetch(`http://localhost:5000/requests/friend-requests/accept/${id}`, { method:'PUT',headers: {Authorization: `Bearer ${token}`}});
  let requestJson = await request.json();
  console.log(requestJson);

}

function PendingControls({id})
{
  return (
    <div style={{marginLeft:'auto', display:'flex', gap: '1rem'}}>
<AcceptButton onClick={(e) => {AcceptRequest(id)}}> 
          <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</SVG>

        </AcceptButton>

        <DeclineButton>
        <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</SVG>

        </DeclineButton>

    </div>
  )
}



function FriendCard({ avatar = logo, name, status, isPending, user2 }) {

  const token = localStorage.getItem('token');
  const user = jwtDecode(token);
  const user1 = user.id;

  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Button onClick={() => {navigate(`/dms/${user1}/${user2}`)}}>
        <ImgContainer status={status}>
          <Img src={logo} alt="" />
        </ImgContainer>
        <P>{name}</P>
        {isPending ? <PendingControls id={id} style={{marginLeft:'3rem'}}></PendingControls> : null}
      </Button>
    </>
  );
}

export default FriendCard;
