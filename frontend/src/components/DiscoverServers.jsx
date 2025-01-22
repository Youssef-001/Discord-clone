import {useState, useEffect} from 'react';
import styled from 'styled-components';

const Servers = styled.div``
const ServerCard = styled.div``



function DiscoverServers({servers})
{
    const baseUrl = "http://localhost:5000/uploads";
    console.log(servers); 
return (
    <>
    <Servers>
        
        {servers.map((server,index) => (
            
            
            <ServerCard>
                
                <img src={baseUrl+server.avatar} alt="" />
                <p>{server.name}</p>
            </ServerCard>
        ))}

    </Servers>

    </>
)

}

export default DiscoverServers;