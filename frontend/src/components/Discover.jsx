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

function Discover()
{

    return (

        <Button>
            <Img src={logo} />
        </Button>
    )

}

export default Discover;