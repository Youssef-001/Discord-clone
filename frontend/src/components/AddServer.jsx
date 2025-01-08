import styled from 'styled-components';

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

const S = styled.svg`

color: rgb(35, 165, 90);
width: 2rem;
height: 2rem;
padding: 0.8rem;

`

function AddServer()
{
    return (

        <Button>
        <S xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</S>

        </Button>
    )
}


export default AddServer;