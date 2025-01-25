import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import styled from "styled-components";
import DmBox from "./DmBox";
import AddServer from "./AddServer";
import Discover from './Discover'
import ServerBox from './ServerBox'
import avatar from '../assets/avatar.jpeg';
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  background-color: #1e1f22;
  overflow: hidden; /* Prevents any overflow and hides the scrollbar */

  padding-right: 2rem;
  padding-left: 2rem;


`;

const Items = styled.div`

display:flex;
flex-direction:column;
gap: 1rem;
margin-top: 1rem;

`

function ServerBar({serverDialog,setDialog, servers, setServers,setSection}) {
  console.log(servers)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        // Decode the token
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        // Make the API request
        const servers = await fetch("http://localhost:5000/server/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(servers)

        const serversJson = await servers.json();
        setServers(serversJson.servers);
        console.log(serversJson);
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Nav>
      <Items>
      <DmBox setSection={setSection}/>
      <AddServer serverDialog={serverDialog} setServerDialog={setDialog} />
      <Discover setSection={setSection} />

      {servers.map((server, index) => (
          <ServerBox name={server.name} servers={servers} key={index} serverId={server.id} channelId={server.channels[0].id} avatar={server.avatar} />
        ))}

      </Items>
    </Nav>
  );
}

export default ServerBar;
