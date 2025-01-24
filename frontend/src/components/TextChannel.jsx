import {useEffect,useState} from 'react';
import styled from 'styled-components'
import Message from './Message'
import { useParams } from 'react-router-dom';

const ChannelInfo = styled.div`

display:flex;
align-items:center;
gap: 1rem;
padding: 1rem;

border-bottom: 1px solid black;

`

const SVG = styled.svg`color:#80848E; width:1.5rem; height: 1.5rem;`
const SVG2 = styled.svg`color:#5CA65A; width:2rem; height: 2rem;position:absolute;right:10px;top:10px; cursor:pointer`

const Channel = styled.div`

display:grid;
grid-template-rows: auto 10fr 1fr;

`

const Input = styled.input`

background-color:#383A40;
padding: 1rem;

border: 1px solid #383A40;
width:100%;
box-sizing: border-box;
color:#BABDC0;
font-size: 1rem;

&::after{


}

`

const Form = styled.form`

position:'relative';
padding: 0 0.6rem;


`

const TextInput = styled.div``


const ChannelMessages = styled.div`display:flex;flex-direction:column;gap:1rem; padding: 1rem;`

function TextChannel({channelName,currentChannel})  {

    const { serverId, channelId } = useParams(); 
    const token = localStorage.getItem('token')


    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('')

    useEffect(() => {

        async function fetchMessages()
        {
            console.log("hellllo");
            let response = await fetch(`http://localhost:5000/server/${serverId}/channel/${currentChannel.id}/messages`, {headers: {Authorization: `Bearer ${token}`}});
            let responseJson = await response.json();
            setMessages(responseJson);
        }

        fetchMessages();

    }, [currentChannel])




    async function submitMessage(e)
    {

        e.preventDefault();

        let response = await fetch(`http://localhost:5000/server/${serverId}/channel/${channelId}/message`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', // Ensure the server understands the request as JSON
            },
            body: JSON.stringify({ message }) // Send the message from the state
        });

            let responseJson = await response.json();
            console.log(responseJson)

    } 

return(


    <>
    <Channel>
    <ChannelInfo>
    <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
</SVG>

<h2 style={{color:'#D3D0D6'}}>{channelName}</h2>

    </ChannelInfo>

    <ChannelMessages>
        
        {messages.map((message) => (
            <Message avatar={message.user.avatar} name={message.user.display_name} message={message.message} date={message.date}></Message>
        ))}
    </ChannelMessages>


    <TextInput>
        <Form>

        <div style={{display:'flex', position:'relative'}}>
        <Input placeholder={`Message # ${channelName}`} onChange={(e) => {setMessage(e.target.value)}}></Input>
        <button type='submit' style={{all:'unset'}} onClick={submitMessage}>

        <SVG2 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</SVG2>
        </button>


        </div>

        </Form>
    </TextInput>


    </Channel>
    </>

)
    

}

export default TextChannel;