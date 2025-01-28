import styled from 'styled-components';
import icon from '../assets/camera-svgrepo-com.svg'
import {useState} from 'react'
const ServerDialogS = styled.div`
  position: absolute;
  top: 25%;
  right: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #313338;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;

  border: 2px solid black;
  padding:0rem 2rem;
  padding-top:3rem;
`;

const AvatarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;


  border: 2px solid #B5BAC1;
border-style:dashed;
border-radius: 50%;

`;

const D = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  width:100%;
  
`;

const FileInput = styled.input`
  display: none; /* Hide the input */
`;

const StyledLabel = styled.label`
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  transition: background-color 0.2s ease;
  
`;

const Button = styled.button`
  background-color: #5865f2;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: fit-content;

  &:hover {
    background-color: #4752c4;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const IMG = styled.img`

width: 2rem;
height: 2rem;
`

const FORM = styled.form`display:flex;flex-direction:column;

justify-content:center;
align-items:center;

`

const D2 = styled.div`
margin-top:1rem;
display:flex;
justify-content:space-between;
align-items:space-around;
width:100%;
background-color:#2B2D31;
padding: 2rem;

`

const ButtonBack = styled.button`
all:unset;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: fit-content;

 

  &:not(:last-child) {
    margin-right: 10px;
  }

`

export default function ServerDialog({serverDialoge,setServerDialoge, servers, setServers}) {

    const [serverName, setServerName] = useState('');
    const [avatar, setAvatar] = useState(null);
    

    const token = localStorage.getItem('token');
    async function handleServerCreate(e) {
        e.preventDefault();
      
        // Create a new FormData instance
        const form = new FormData();
      
        // Append server name and avatar to the form
        form.append('name', serverName);
        form.append('avatar', avatar);
        form.append('token', token)
      
        try {
          const response = await fetch('http://localhost:5001/server/create', {
            method: 'POST',
            body: form,
            headers: {Authorization: `Bearer ${token}`}
          });
      
          const jsonRequest = await response.json();
          setServers([...servers, jsonRequest])
          console.log(jsonRequest);
        } catch (error) {
          console.error('Error creating server:', error);
        }
      }
  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <ServerDialogS>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        Customize your server
      </h2>
      <p style={{ color: '#B4B9C0', textAlign: 'center' }}>
        Give your new server a personality with a name and an icon. You can always change it later.
      </p>

      <FORM action="" method="POST">
        <AvatarDiv>
          <StyledLabel htmlFor="avatar"><IMG src={icon} alt="" /><p>UPLOAD</p></StyledLabel>
          <FileInput type="file" name="avatar" id="avatar" onChange={handleFileChange}/>
        </AvatarDiv>

        <D>
          <label htmlFor="name" style={{ color: '#B4B9C0' }}>
            SERVER NAME
          </label>
          <input
            type="text"
            name="name"
            value={serverName}
            onChange={(e) => {setServerName(e.target.value)}}
            style={{
              backgroundColor: '#202225',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '14px',
            }}
          />
        </D>

        <D2>
          <ButtonBack type="button" onClick={() => {setServerDialoge(!serverDialoge)}}>Back</ButtonBack>
          <Button onChange={(e) => {setServerName(e.target.value)}} type="submit" onClick={handleServerCreate}>
            Create
          </Button>
        </D2>
      </FORM>
    </ServerDialogS>
  );
}
