
import {useState, useEffect} from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const ChannelBar = styled.div`

height: 100%;
background-color:#2B2D31;

`
const ServerInfo = styled.div`padding: 1rem; border-bottom: 1px solid black;
display:flex;
align-items:center;
justify-content: space-between;
cursor:pointer;
&:hover{background-color:#36373D}
`

const ChannelButton = styled.button`
all:unset;
width:80%;
padding: 0.5rem;
cursor:pointer;
display:flex;
align-items:cecnter;
gap: 10px;
margin-top: 1rem;

&:hover{

background-color:#36373D;

}

`

const SVG = styled.svg``
const SVG2= styled.svg`width:1rem; height:1rem;color:#C9CCCF; margin-left:10px; cursor:pointer `
const SVG3= styled.svg`width:1rem; height: 1rem; color:#C9CCCF; margin-left:auto; margin-right: 1rem; cursor:pointer;&:hover{color:white}`
const SVG4= styled.svg`width:1.5rem; height: 1.5rem; color:white; cursor:pointer;&:hover{color:white}`
const SVG5 = styled.svg`width: 1.7rem; height: 1.7rem; color: #caccce;`
const Bar = styled.div`display:flex;margin-top:3rem;`;
const TextChannels = styled.div``



function ServerChannels({name, server,setCurrentChannel,createChannelDialog, setCreateChannelDialog})
{
    const navigate = useNavigate(); // Initialize navigate


    function changeChannel(channel)
    {
        setCurrentChannel(channel);
        navigate(`/server/${server.id}/channel/${channel.id}`);

    }


    return (

        <>

        <ChannelBar>
        <ServerInfo>
            <p style={{color:'white', fontSize: '1.5rem'}}> {name}</p>
            <SVG4 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</SVG4>

            
        </ServerInfo>

            <Bar>
            <SVG2 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</SVG2>

<p style={{color:'#C9CCCF', marginLeft:'10px'}}>TEXT CHANNELS</p>

        <button style={{all:'unset', marginLeft:'auto'}} onClick={(e) => {setCreateChannelDialog(!createChannelDialog)}}>

        <SVG3 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</SVG3>
        </button>
            </Bar>

        <TextChannels>  

            {server.channels.map((channel) => (
                            <ChannelButton onClick={() => changeChannel(channel)}>

                            <SVG5 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                </SVG5>
                
                <h2 style={{color:'#caccce'}}>{channel.name}</h2>
                            </ChannelButton>
                
                ))}



        </TextChannels>
        </ChannelBar>
        

        </>
    )
    
}

export default ServerChannels