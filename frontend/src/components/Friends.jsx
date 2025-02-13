import styled from 'styled-components'
import {useEffect,useState} from 'react'

import FriendCard from './FriendCard'
import FriendsIcon from './FriendsIcon'
import FriendsHome from './FriendsHome'
import ProfileSection from './ProfileSection'
import {jwtDecode} from 'jwt-decode'
const Aside = styled.aside`

height: 100vh;
background-color: #2B2D31;
position:relative;


display:flex;
flex-direction: column;
`


const FriendsDiv = styled.div`
margin-top: 1rem;
padding: 1rem;

`

const P2 = styled.p`

color: #949BA4;
font-size: 0.9rem;
margin-top: 2rem;
font-family: Helvetica;


`
const FriendsSection = styled.div`margin-top: 2rem;`;

function Friends({isDm=false})
{
    const token = localStorage.getItem('token');
    const user = jwtDecode(token);
    const [friends,setFriends] = useState([]);

    console.log(friends);

    useEffect(() => {

        async function getUserFriends()
        {
            let req = await fetch('http://localhost:5001/requests', {headers: {Authorization: `Bearer ${token}`}});
            let friends = await req.json();
            console.log(friends)
            setFriends(friends);
            console.log(friends);

        }

        getUserFriends();

    },[])


    return (
        <>
        <Aside>
        <FriendsDiv>
       <FriendsIcon/>

        <P2>DIRECT MESSAGES</P2>

        <FriendsSection>

        {friends
  .filter(friend => friend.status === 'ACCEPTED') // Filter friends with status "ACCEPTED"
  .map((friend, index) => (
    <FriendCard
      key={index}
      name={friend.user.display_name}
      status={friend.user.status}
      user2={friend.friend.id}
    />
  ))}
        </FriendsSection>


        


        </FriendsDiv>
        <ProfileSection name={user.display_name} status={user.status}/>

        </Aside>

        {!isDm ?
                <FriendsHome friends={friends}/> : null

        }

        </>

    )
}



export default Friends;