import logo from '../assets/discord.svg';
import styled from 'styled-components';
const Br = styled.div`
  border-bottom: 1px solid green;
  width: 100%; /* Ensures the line spans the full width */
  margin: 1rem 0; /* Adds spacing above and below the line */
`;

const D = styled.button`
  all:unset;
  cursor:pointer;
  border-radius: 50%;
  display:inline-block;
  transition: background-color 0.3s ease;
    transition: border-radius 0.2s ease;
        display:flex;
    justify-content:center;
    align-items:center;
  background-color: #313338;

  &:hover {
    background-color: #5967F2;
    border-radius: 30%;
  }

  
`;

const Img = styled.img`

  padding: 0.8rem;
  width: 2rem;
  height: 2rem;
`

function DmBox() {
  return (
    <>
      <D>
        <Img src={logo} alt="Logo" />
      </D>
    </>
  );
}

export default DmBox;
