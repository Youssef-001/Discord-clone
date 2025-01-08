import styled from 'styled-components'
import logo from '../assets/friend.svg';

const Aside = styled.aside`

height: 100vh;
background-color: #2B2D31;
padding: 2rem;



`

const Img = styled.img`

  padding: 0.8rem;
  width: 2rem;
  height: 2rem;
  color: #caccce;

`

const D = styled.button`

all:unset;
cursor:pointer;
display:flex;
flex-direction : row;
justify-content:center;
align-items:center;
gap: 4px;

`

const P = styled.p`color:#caccce; font-size: 18px; font-weight:  500; line-weight: 20px; font-family:Helvetica`
function Friends()
{
    return (

        <Aside>
        
        <D>
            <Img src={logo}></Img>
            <P>Friends</P>

        </D>
        
        
        </Aside>

    )
}



export default Friends;