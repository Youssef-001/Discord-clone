import { createBrowserRouter, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useAppContext } from "./Context";
import {useState, useEffect} from 'react'
import ServerDialog from './ServerDialog'
import ServerBar from './ServerBar'
import ServerChannels from './ServerChannels'
import styled from 'styled-components'
const Layout = styled.div`
display:grid;
grid-template-columns: auto 1fr 6fr;
`
function ServerLayout()
{
const {servers, setServers, section, setSection, createServerDialoge,setCreateServerDialoge} = useAppContext();
const [currentServer, setCurrentServer] = useState(null);


    const { serverId, channelId } = useParams();
    const location = useLocation();
    const passedState = location.state || {}; // Get the passed state
    const { name } = location.state || {};
    console.log(passedState)



    useEffect(() => {
        servers.forEach((server) => {
            if (server.id == serverId)
            {
                setCurrentServer(server);
            }
        })
    }, [])

    return (
        <Layout>
         <ServerBar
          serverDialog={createServerDialoge}
          setDialog={setCreateServerDialoge}
          servers = {servers}
          setServers={setServers}
          setSection={setSection}
        ></ServerBar>
        {createServerDialoge && <ServerDialog serverDialoge={createServerDialoge} setServerDialoge={setCreateServerDialoge}           servers = {servers}
                  setServers={setServers}/>}
        <ServerChannels server={currentServer} name={name} ></ServerChannels>
        </Layout>

    )
}

export default ServerLayout;




