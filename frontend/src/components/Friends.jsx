import styled from 'styled-components'
import {useEffect,useState} from 'react'

import FriendCard from './FriendCard'
import FriendsIcon from './FriendsIcon'
import FriendsHome from './FriendsHome'
const Aside = styled.aside`

height: 100vh;
background-color: #2B2D31;



`


const FriendsDiv = styled.div`
margin-top: 1rem;
margin-right: 3rem;
padding: 1rem;
`

const P2 = styled.p`

color: #949BA4;
font-size: 0.9rem;
margin-top: 2rem;
font-family: Helvetica;


`
const FriendsSection = styled.div`margin-top: 2rem;`;

function Friends()
{
    const [friends,setFriends] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {

        async function getUserFriends()
        {
            let req = await fetch('http://localhost:5000/requests/friends', {headers: {Authorization: `Bearer ${token}`}});
            let friends = await req.json();
            setFriends(friends.friends);
            console.log(friends.friends);

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

        </FriendsSection>
        
        {friends.map((friend, index) => (
          <FriendCard key={index} name={friend.friend.display_name} status={friend.friend.status} />
        ))}


        </FriendsDiv>
        </Aside>

        <FriendsHome/>

        </>

    )
}



export default Friends;