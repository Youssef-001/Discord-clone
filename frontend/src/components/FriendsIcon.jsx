import styled from 'styled-components'

import logo from '../assets/friend.svg';

const Img = styled.img`

  padding: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #caccce;

`

const D = styled.button`

all:unset;
display:flex;
flex-direction : row;
align-items:center;
gap: 4px;
width: 100%;
margin-left: 6px;
cursor:pointer;
&:hover{

background-color: #35383C;
p{
color :#CADADC
}
border-radius: 8px;

}

`
const P = styled.p`color:#caccce; font-size: 18px; font-weight:  500; line-weight: 20px; font-family:Helvetica`


export default function FriendsIcon()
{
   return ( <D>
               <Img src={logo}></Img>
               <P>Friends</P>
   
           </D>)
}