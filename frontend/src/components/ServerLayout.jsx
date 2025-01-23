import { createBrowserRouter, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useAppContext } from "./Context";
import ServerDialog from './ServerDialog'
import ServerBar from './ServerBar'
function ServerLayout()
{
const {servers, setServers, section, setSection, createServerDialoge,setCreateServerDialoge} = useAppContext();

    const { serverId, channelId } = useParams();
    const location = useLocation();
    const passedState = location.state || {}; // Get the passed state
    console.log(passedState)
    return (
        <>
         <ServerBar
          serverDialog={createServerDialoge}
          setDialog={setCreateServerDialoge}
          servers = {servers}
          setServers={setServers}
          setSection={setSection}
        ></ServerBar>
        {createServerDialoge && <ServerDialog serverDialoge={createServerDialoge} setServerDialoge={setCreateServerDialoge}           servers = {servers}
                  setServers={setServers}/>}
        <Outlet/>
        </>

    )
}

export default ServerLayout;




