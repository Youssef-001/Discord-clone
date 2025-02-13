import ServerBar from './ServerBar'
import Friends from './Friends'
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import ServerDialog from './ServerDialog'
import DiscoverServers from './DiscoverServers'
import { jwtDecode } from "jwt-decode";
import { useAppContext } from "./Context";

const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => 
    props.view === "DISCOVER" ? "auto 1fr" : "auto 1fr 6fr"};
  opacity: ${(props) => (props.serverDialog ? 0.3 : 1)};
  transition: opacity 0.3s ease, grid-template-columns 0.3s ease; /* Smooth transition effect */
`;

function Home() {
  // const [createServerDialoge, setCreateServerDialoge] = useState(false);
  // const [servers, setServers] = useState([]);
  // const [section, setSection] = useState('HOME');

const {servers, setServers, section, setSection, createServerDialoge,setCreateServerDialoge} = useAppContext();

  return (
    <>
      <HomeDiv view={section} serverDialog={createServerDialoge}> 
        <ServerBar
          serverDialog={createServerDialoge}
          setDialog={setCreateServerDialoge}
          servers = {servers}
          setServers={setServers}
          setSection={setSection}
        ></ServerBar>
        {section == "HOME" ? <Friends></Friends> : <DiscoverServers servers={servers}></DiscoverServers>}
      {/* Overlay */}

      {/* Dialog */}
      </HomeDiv>
      {createServerDialoge && <ServerDialog serverDialoge={createServerDialoge} setServerDialoge={setCreateServerDialoge}           servers = {servers}
          setServers={setServers}/>}

    </>
  );
}
export default Home;