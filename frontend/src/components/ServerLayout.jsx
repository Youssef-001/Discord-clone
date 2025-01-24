import styled from 'styled-components';
import { useParams, useLocation } from "react-router-dom";
import { useAppContext } from "./Context";
import { useState, useEffect } from 'react';
import ServerDialog from './ServerDialog';
import ServerBar from './ServerBar';
import ServerChannels from './ServerChannels';
import TextChannel from './TextChannel'

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 6fr;
  opacity: ${(props) => (props.dimmed ? 0.5 : 1)}; /* Adjust opacity based on dimmed prop */
\  transition: opacity 0.3s ease; /* Smooth transition for opacity changes */
`;



const ChannelDialog = styled.div`

width: 30%;
height: 40%;
position:absolute;
top: 20%;
left: 40%;
background-color: #1E1F22;
z-index:100;
opacity:1;

`

const SVG = styled.svg`

color:white;
width: 1.2rem;
height: 1.2rem;
`

const InputContainer = styled.div`
  position: relative;
  width: 80%; /* Match the input width */

  svg {
    position: absolute;
    top: 50%;
    left: 10px; /* Adjust spacing between SVG and input text */
    transform: translateY(-50%);
    width: 20px; /* Adjust size as needed */
    height: 20px;
    color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 7px 7px 7px 40px; /* Add left padding to make space for SVG */
  background-color: #313338;
  border: 1px solid #313338;
  color: white;
  font-size: 1rem;
  box-sizing: border-box; /* Ensure padding doesn't break layout */
  border-radius: 4px; /* Optional: Add some rounded corners */
  color:'white';
`;


function ServerLayout() {
  const { servers, setServers, section, setSection, createServerDialoge, setCreateServerDialoge } = useAppContext();

  const { serverId, channelId } = useParams();
  const [currentServer, setCurrentServer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [createChannelDialog, setCreateChannelDialog] = useState(false);
  const [currentChannel, setCurrentChannel] = useState();

  const location = useLocation();
  const passedState = location.state || {};
  const { name } = location.state || {};
  console.log(passedState);
  const token = localStorage.getItem('token')
  const [channelName, setChannelName] = useState('');


  async function createChannel(e)
  {
    console.log("halllo")

    const response = await fetch(`http://localhost:5000/server/${serverId}/channel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content
        Authorization: `Bearer ${token}`, // Include the token
      },
      body: JSON.stringify({ channel_name: channelName }), // Convert body to JSON string
    });
      let responseJson = await response.json();
    console.log(responseJson)
    setCurrentChannel(responseJson);
    setCreateChannelDialog(false);
  }

  // Update currentServer when servers or serverId changes
  useEffect(() => {
    if (!servers || servers.length === 0 || !serverId) {
      setIsLoading(true);
      return;
    }

    const foundServer = servers.find((server) => server.id == serverId);
    if (foundServer) {
      setCurrentServer(foundServer);
      setCurrentChannel(foundServer.channels[0]);
    } else {
      setCurrentServer(null);
    }
    setIsLoading(false);
  }, [servers, serverId]);

  // Loading state
  if (isLoading) {
    return <div>Loading server...</div>;
  }

  // Handle case where no matching server is found
  if (!currentServer) {
    return <div>Server not found.</div>;
  }

  return (
    <Layout dimmed={createChannelDialog}>
      <ServerBar
        serverDialog={createServerDialoge}
        setDialog={setCreateServerDialoge}
        servers={servers}
        setServers={setServers}
        setSection={setSection}
      />
      {createServerDialoge && (
        <ServerDialog
          serverDialoge={createServerDialoge}
          setServerDialoge={setCreateServerDialoge}
          servers={servers}
          setServers={setServers}
        />
      )}
      <ServerChannels
        server={currentServer}
        name={name}
        setCurrentChannel={setCurrentChannel}
        createChannelDialog={createChannelDialog}
        setCreateChannelDialog={setCreateChannelDialog}
      />

{createChannelDialog ? <ChannelDialog>


<div style={{display:'flex', color:'white', padding: '1rem', }}>
<h2>Create Channel</h2>
<button style={{all:'unset', color:'white',cursor:'pointer', marginLeft:'auto'}} onClick={() => {setCreateChannelDialog(!createChannelDialog)}}>
<SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</SVG>

</button>



</div>

<div style={{marginTop:'2rem', color:'white', padding:'1rem',height:'100%' }}>
<form action="">
  <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
    <label htmlFor="name">CHANNEL NAME</label>
    <InputContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
        />
      </svg>
      <Input
  placeholder="new-channel"
  onChange={(e) => {
    setChannelName(e.target.value);
  }}
/>    </InputContainer>
  </div>


  <div style={{display:'flex', gap:'2rem', position:'absolute', bottom: '20px', right: '20px'}}>
  <button style={{all:'unset', color:'white',cursor:'pointer' }} onClick={() => {setCreateChannelDialog(!createChannelDialog)}}>Cancel</button>
  <button type="submit" style={{all:'unset', backgroundColor:'#5967F2', padding:'0.5rem', borderRadius:'4px', cursor:'pointer'}}
  onClick={createChannel}>Create Channel </button>
  </div>


</form>
</div>

</ChannelDialog> : null}
<TextChannel channelName={currentChannel.name}></TextChannel>
    </Layout>

    
  );
}

export default ServerLayout;
