
import { useAppContext } from "./Context";
import ServerBar from './ServerBar';
import DiscoverServers  from "./DiscoverServers";

import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => 
    props.view === "DISCOVER" ? "auto 1fr" : "auto 1fr "};
  opacity: ${(props) => (props.serverDialog ? 0.3 : 1)};
  transition: opacity 0.3s ease, grid-template-columns 0.3s ease; /* Smooth transition effect */
`;
export default function DiscoverLayout()
{
    const {servers, setServers, section, setSection, createServerDialoge,setCreateServerDialoge, allServers, setAllServers} = useAppContext();
    
    return (
        <Layout>
            <ServerBar
          serverDialog={createServerDialoge}
          setDialog={setCreateServerDialoge}
          servers = {servers}
          setServers={setServers}
          setSection={setSection}
        ></ServerBar>

<DiscoverServers servers={allServers}></DiscoverServers>
        </Layout>
    )
}