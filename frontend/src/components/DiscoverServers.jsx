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
const ServerCard = styled.div`padding:2rem;width: 300px;
`;


const IMG = styled.img`

width: 100%;

`
const IMG2 = styled.img`

width: 4rem;
border-radius: 35%;


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
color:#DBDEE1;
font-weight: 600;
font-size: 1.2rem;
`

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
                <div style={{backgroundColor:'#232428', padding:'1rem', width:'275px'}}>
                <IMG2 src={baseUrl+server.avatar} alt="" />
                <div style={{display:'flex', flexDirection:'column', gap: '1rem'}}>
                <P>{server.name}</P>
                <P>Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!</P>

                </div>
                </div>
            </ServerCard>
        ))}

    </Servers>
    </Container>
    </>
)

}

export default DiscoverServers;