
import {useState, useEffect} from 'react';
import styled from 'styled-components'


const ChannelBar = styled.div`

`
const ServerInfo = styled.div``

const SVG = styled.svg``
const SVG2= styled.svg``
const SVG3= styled.svg``


function ServerChannels({name})
{

    return (

        <>
        <ChannelBar>
        <ServerInfo>
            <p>{name}</p>
            
        </ServerInfo>

        <TextChannels>  
            <Bar>
            <SVG2 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </SVG2>
        <SVG3 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</SVG3>
            </Bar>


        </TextChannels>
        </ChannelBar>
        </>
    )
    
}

export default ServerChannels