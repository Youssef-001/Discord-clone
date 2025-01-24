import {useEffect,useState} from 'react';
import styled from 'styled-components'


const ChannelInfo = styled.div`

display:flex;
align-items:center;
gap: 1rem;
padding: 1rem;

border-bottom: 1px solid black;

`

const SVG = styled.svg`color:#80848E; width:1.5rem; height: 1.5rem;`

const Channel = styled.div``

function TextChannel({channelName})  {


    const [messages, setMessages] = useState([]);

    useEffect(() => {

        async function fetchMessages()
        {
            let response = await fetch('');
        }

    }, [])

return(


    <>
    <Channel>
    <ChannelInfo>
    <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
</SVG>

<h2 style={{color:'#D3D0D6'}}>{channelName}</h2>

    </ChannelInfo>




    </Channel>
    </>

)
    

}

export default TextChannel;