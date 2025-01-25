import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid black;
`;

const SVG = styled.svg`color: #80848E; width: 1.5rem; height: 1.5rem;`;
const SVG2 = styled.svg`color: #5CA65A; width: 2rem; height: 2rem; position: absolute; right: 10px; top: 10px; cursor: pointer;`;

const Channel = styled.div`
  display: grid;
  grid-template-rows: auto 10fr 1fr;
`;

const Input = styled.input`
  background-color: #383A40;
  padding: 1rem;
  border: 1px solid #383A40;
  width: 100%;
  box-sizing: border-box;
  color: #BABDC0;
  font-size: 1rem;
`;

const Form = styled.form`
  position: relative;
  padding: 0 0.6rem;
`;

const TextInput = styled.div``;

const ChannelMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

function TextChannel({ channelName, currentChannel,  }) {
  const messagesRef = useRef([]);

  const { serverId, channelId } = useParams();
  const token = localStorage.getItem('token');
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchMessages() {
      console.log("Fetching messages...");
      try {
        let response = await fetch(`http://localhost:5000/server/${serverId}/channel/${currentChannel.id}/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        let responseJson = await response.json();
        setMessages(responseJson); // Set initial messages
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }

    fetchMessages();
  }, [currentChannel]); // Only refetch when currentChannel changes

  async function submitMessage(e) {
    e.preventDefault();
    try {
      let response = await fetch(`http://localhost:5000/server/${serverId}/channel/${channelId}/message`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        let newMessage = await response.json();
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage(''); // Clear input field
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <>
      <Channel>
        <ChannelInfo>
          <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
          </SVG>

          <h2 style={{ color: '#D3D0D6' }}>{channelName}</h2>
        </ChannelInfo>

        <ChannelMessages>
          {messages.map((message) => (
            <Message
              key={message.id}
              avatar={message.user?.avatar} // Safeguard with optional chaining
              name={message.user?.display_name || "Unknown User"} // Fallback for undefined user
              message={message.message}
              date={message.date}
            />
          ))}
        </ChannelMessages>

        <TextInput>
          <Form>
            <div style={{ display: 'flex', position: 'relative' }}>
              <Input
                placeholder={`Message # ${channelName}`}
                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
              />
              <button type='submit' style={{ all: 'unset' }} onClick={submitMessage}>
                <SVG2 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </SVG2>
              </button>
            </div>
          </Form>
        </TextInput>
      </Channel>
    </>
  );
}

export default TextChannel;