import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import styled from "styled-components";
import DmBox from "./DmBox";
import AddServer from "./AddServer";
import Discover from './Discover'

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  background-color: #1e1f22;
  overflow: hidden; /* Prevents any overflow and hides the scrollbar */
  position:absolute;
  left: 0;
  top: 0;
  padding-right: 1rem;
  padding-left: 1rem;


`;

const Items = styled.div`

display:flex;
flex-direction:column;
gap: 1rem;
margin-top: 1rem;

`

function ServerBar() {
  const [servers, setServers] = useState([]);

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
    <Aside>
      <Items>
      <DmBox />
      <AddServer />
      <Discover />

      </Items>
    </Aside>
  );
}

export default ServerBar;
