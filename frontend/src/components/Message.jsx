import logo from '../assets/l.jpeg';

import styled from 'styled-components'

function formatDateToCustomFormat(dateString) {
    const date = new Date(dateString); // Parse the input date string
    
    const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle the case for 0 (midnight)
    
    // Pad minutes with a leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Format the date as 'MM/DD/YY, HH:MM AM/PM'
    return `${month}/${day}/${year}, ${hours}:${minutes} ${ampm}`;
  }

const MessageDiv = styled.div`

padding: 0.6rem;
display:flex;
gap: 1rem;
border-radius: 8px;

&:hover{
background-color:#2E3035;
}

`

function Message({avatar=logo, name, message, date})
{

    return (

        <MessageDiv >
            <img src={logo} alt=""  style={{width:'2rem', height:'2rem', borderRadius:'75%'}}/>
            <div>
                <p style={{color:'#E3EDF5'}}>{name}</p>

            <p style={{marginTop:'8px', color:'#E3EDF5'}}>{message}</p>
            </div>

            <datetime style={{color:'#caccce', fontSize: '0.8rem'}}>{formatDateToCustomFormat(date)}</datetime>
        </MessageDiv>
    )

}

export default Message;