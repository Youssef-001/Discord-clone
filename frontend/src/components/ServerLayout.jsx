import { createBrowserRouter, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

import ServerBar from './ServerBar'
function ServerLayout()
{

    const { serverId, channelId } = useParams();
    const location = useLocation();
    const passedState = location.state || {}; // Get the passed state
    console.log(passedState)
    return (
        <>
        <ServerBar servers={passedState} ></ServerBar>
        <Outlet/>
        </>

    )
}

export default ServerLayout;




