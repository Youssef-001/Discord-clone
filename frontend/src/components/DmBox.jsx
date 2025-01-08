import logo from '../assets/discord.svg';
import styled from 'styled-components';

const D = styled.button`
  all:unset;
  cursor:pointer;
  border-radius: 50%;
  display:inline-block;
  transition: background-color 0.3s ease;
    transition: border-radius 0.2s ease;

  background-color: #313338;

  &:hover {
    background-color: #5967F2;
    border-radius: 30%;
  }
`;

const Img = styled.img`

  padding: 0.8rem;
`

function DmBox() {
  return (
    <>
      <D>
        <Img src={logo} alt="Logo" width="50" height="50" />
      </D>
    </>
  );
}

export default DmBox;
