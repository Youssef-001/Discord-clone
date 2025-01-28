import FriendsIcon from './FriendsIcon';
import styled from 'styled-components';
import FriendCard from './FriendCard';
import {useState} from 'react'
const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Button = styled.button`
  all: unset;
  color: #949BA4;
  border-radius: 4px;
  padding: 2px 8px; /* Add horizontal padding if needed */
  margin: 0;
  cursor: pointer;
  line-height: 1; /* Ensures no extra height from text */
  &:hover {
    background-color: #3a3c42;
    color:#DBDDD7
  }

  font-family: 'Proxima Nova', Verdana, sans-serif; /* Fallback fonts */
  font-size: 1.1rem;
  font-weight: 600;




`;

const Button2 = styled.button`
  all: unset;
  color: white;
    border-radius: 6px;
  font-family: 'Proxima Nova', Verdana, sans-serif; /* Fallback fonts */
  font-size: 1.1rem;
  font-weight: 600;  border-radius: 4px;
  margin: 0;
  padding: 8px 12px; /* Add horizontal padding if needed */
  line-height: 1; /* Prevent extra spacing from text */
  cursor: pointer;
  background-color: #468146;
  
`;

const Div = styled.div`
  display: flex;
  align-items: center; /* Ensure content is vertically centered */
  gap: 2rem;
  background-color: #313338;
  padding: 12px;
`;

const P = styled.p`
  color:#9B9FA5;
  position:relative;

  &::after{
  
  content: '';
  width: 100%;
  background-color: #393C41;
  position:absolute;
  bottom: -20px;

  left: 0;
  width: 100%;
  height: 0.129rem;

  
  }
`

const FriendsContainer = styled.div`
position:relative;
padding: 2rem;
  font-family: 'Proxima Nova', Verdana, sans-serif; /* Fallback fonts */
  font-size: 1.1rem;
  font-weight: 600;  border-radius: 4px;
background-color: #313338

`

const FriendsDiv = styled.div`
display:flex;
flex-direction:column;
gap: 1em;
margin-top: 3rem;

`


function filterFriends( friends, filter ) {
  let filteredFriends = [];

  if (filter === "ALL") {
    filteredFriends = friends.filter(friend => friend.status === "ACCEPTED");
  } else if (filter === "ACCEPTED") {

    filteredFriends = friends.filter(friend => friend.friend.status === "ONLINE");
  } else if (filter === "PENDING") {
    filteredFriends = friends.filter(friend => friend.status === "PENDING");
  }


 

  return (
    <>
      {filteredFriends.map((friend, index) => (
        <FriendCard
          key={index}
          name={friend.user.username}
          status={friend.user.status}
          isPending={friend.status == "PENDING" ? true : false}
          id={friend.user.id}
        />
      ))}
    </>
  );
}


function FriendsHome({friends}) {
  console.log(friends);
  const [username, setUsername] = useState('');

  const [section, setSection] = useState('ONLINE');


  async function sendFriendRequest(e)
  {
    e.preventDefault();

    let request = await fetch(`http://localhost:5000/users/${username}/id`);
    let requestJson = await request.json();
    const token = localStorage.getItem('token');
    let receiverId = requestJson.userId;

    let request2 = await fetch(`http://localhost:5000/requests/friend-requests/${receiverId}`, {method:'POST', headers: {Authorization: `Bearer ${token}`}});
    let friendRequest = await request2.json();


  }

  const renderContent = () => {
    if (section === 'ADD') {
      return (<>
      
      <form action="">
        <div style={{ width:'100%',position:'relative'}}>
        <label htmlFor="add" style={{display:'block', color:'white'}}>ADD FRIEND</label>
        <input type="text" style={{width:'90%', padding:'0.9rem',marginTop:'20px', backgroundColor:'#1E1F22', border:'1px solid #1E1F22'
          ,color:'#B6B9BC'
          ,fontSize:'1rem',
          borderRadius:'4px'

        }} onChange={(e) => {setUsername(e.target.value)} }/>

          
        <button type="submit" style={{backgroundColor:'#4852C4', color:'white', padding:'0.5rem', border:'1px solid #4852C4'
          ,borderRadius:'4px',fontSize:'0.9rem', position:'absolute', right: '130px', top:'48px'
        }}  onClick={sendFriendRequest}>Send Friend Request</button>
        </div>
      </form>

        
        
        </>

      )
    }
    return filterFriends(friends,section);
  };
  return (
    <Main>
      <Div>
        <div>
          <FriendsIcon />
        </div>

        <Button onClick={(e) => {setSection('ONLINE')}}>Online</Button>
        <Button onClick={(e) => {setSection('ALL')}}>All</Button>
        <Button onClick={(e) => {setSection('PENDING')}}>Pending</Button>
        <Button2 onClick={(e) => {setSection('ADD')}}>Add Friend</Button2>
      </Div>

      <FriendsContainer>

      <FriendsDiv>{renderContent()}</FriendsDiv>
      </FriendsContainer>
    </Main>
  );
}

export default FriendsHome;
