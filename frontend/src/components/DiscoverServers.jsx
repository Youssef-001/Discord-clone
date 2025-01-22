import {useState, useEffect} from 'react';
import styled from 'styled-components';

const Servers = styled.div`

display:flex;
flex-direction: row;
gap: 3rem;
justify-content:center;
flex-wrap:wrap;
margin-top: 7rem;

`
const ServerCard = styled.div``;


const IMG = styled.img`

width: 200px;
objec-type:cover;

`

const Container = styled.div`display:flex;
flex-direction:column;

`

const HERO = styled.div`

width: 100%;
background-color:#684499;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;



`
const P1 = styled.p`
font-size: 3.75rem;
color:white;
padding: 2rem;
font-weight: 700;
line-height: 1.23;
width: 27ch;
text-align:center;

`
const P2 = styled.p`color:#9CA6D7;padding:1rem;
`
const P = styled.p`
color:#DBDEE1;`

function DiscoverServers({servers})
{
    const baseUrl = "http://localhost:5000/uploads/";
    console.log(servers); 
return (
    <>
    <Container>
        <HERO>
            <P1>FIND YOUR COMMUNITY ON DISCORD</P1>
            <P2>From gaming, to music, to learning, there's a place for you.</P2>
        </HERO>
    <Servers>
        
        {servers.map((server,index) => (
            
            
            <ServerCard>
                
                <IMG src={baseUrl+server.avatar} alt="" />
                <P>{server.name}</P>
            </ServerCard>
        ))}

    </Servers>
    </Container>
    </>
)

}

export default DiscoverServers;