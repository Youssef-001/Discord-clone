import { useParams, useLocation } from "react-router-dom";
import { useAppContext } from "./Context";
import { useState, useEffect } from 'react';
import ServerDialog from './ServerDialog';
import ServerBar from './ServerBar';
import ServerChannels from './ServerChannels';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 6fr;
`;

function ServerLayout() {
  const { servers, setServers, section, setSection, createServerDialoge, setCreateServerDialoge } = useAppContext();

  const { serverId, channelId } = useParams();
  

  const [currentServer, setCurrentServer] = useState(null);
  
  const [isLoading, setIsLoading] = useState(true);
  
  

  
  const [currentChannel, setCurrentChannel] = useState();


  const location = useLocation();
  const passedState = location.state || {}; // Get the passed state
  const { name } = location.state || {};
  console.log(passedState);

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
      setCurrentServer(null); // No matching server found
    }
    setIsLoading(false); // Data has been processed
  }, [servers, serverId]); // Re-run when servers or serverId changes

  // Loading state
  if (isLoading) {
    return <div>Loading server...</div>; // Show a loading spinner or message
  }

  // Handle case where no matching server is found
  if (!currentServer) {
    return <div>Server not found.</div>;
  }

  return (
    <Layout>
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
      <ServerChannels server={currentServer} name={name} />
    </Layout>
  );
}

export default ServerLayout;