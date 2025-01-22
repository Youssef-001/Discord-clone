import styled from 'styled-components'
import logo from '../assets/compass.svg';

const Button = styled.button`

all:unset;
cursor:pointer;
background-color: #313338;
border-radius: 50%;
  display:inline-block;
    transition: background-color 0.3s ease;
    transition: border-radius 0.2s ease;
        display:flex;
    justify-content:center;
    align-items:center;


&:hover{

background-color: #5CA65A;
border-radius: 30%;
  svg {
      color: white; /* Change SVG color on button hover */
    }
}

`

const Img = styled.img`

width: 2rem;
height: 2rem;
padding: 0.8rem;


`

const Br = styled.div`

margin:0 ;
padding: 0;
width: 100%;
height: 100%;
border-top: 2px solid #36373C;

`

function Discover({setSection})
{

    return (
<>
        <Button onClick={(e) => {setSection('DISCOVER')}}>
            <Img src={logo} />
        </Button>
        <Br></Br>
        </>      
    )

}

export default Discover;