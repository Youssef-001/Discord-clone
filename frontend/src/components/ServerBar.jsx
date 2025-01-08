import {useEffect,useState} from 'react'
import { jwtDecode } from "jwt-decode";
import styled from 'styled-components'
import DmBox from './DmBox'
import AddServer from './AddServer'



const Aside = styled.aside

`

display:flex;
flex-direction:column;
width: fit-content;
justify-content:center;
align-items:center;
gap: 1rem;


`

function ServerBar()
{
    const [servers, setServers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve the token from localStorage
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found');
                    return;
                }
    
                // Decode the token
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id;
    
                // Make the API request
                const servers = await fetch('http://localhost:5000/server/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
    
                const serversJson = await servers.json();
                setServers(serversJson.servers)
                console.log(serversJson);
    
            } catch (error) {
                console.error('Error fetching server data:', error);
            }
        };
    
        fetchData();
    }, []); 


    return (<Aside>
    <DmBox></DmBox>
    <AddServer></AddServer>

    </Aside>)
    
}

export default ServerBar;