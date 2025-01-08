import styled from 'styled-components'
import logo from '../assets/friend.svg';

const Aside = styled.aside`

height: 100vh;
background-color: #2B2D31;



`

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

const FriendsDiv = styled.div`
margin-top: 1rem;
margin-right: 3rem;
padding: 1rem;
`

const P2 = styled.p`

color: #949BA4;
font-size: 0.9rem;
margin-top: 2rem;
font-family: Helvetica;


`


const P = styled.p`color:#caccce; font-size: 18px; font-weight:  500; line-weight: 20px; font-family:Helvetica`
function Friends()
{
    return (

        <Aside>
        <FriendsDiv>
        <D>
            <Img src={logo}></Img>
            <P>Friends</P>

        </D>

        <P2>DIRECT MESSAGES</P2>
        
        </FriendsDiv>
        </Aside>

    )
}



export default Friends;