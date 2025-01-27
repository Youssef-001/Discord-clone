import styled from 'styled-components'
import FriendCard from './FriendCard'
const Container = styled.div`; 


background-color:#2B2D31;
padding-right: 5rem;
padding-top: 1rem;
padding-left: 10px;

z-index:22222;
`
const Users = styled.div`display:flex; flex-direction:column;

gap: 1.2rem;
`

function ServerUsers({users})
{


    return (
        <Container>

            <Users>
                {users.map((user) => (
                    <FriendCard avatar={user.avatar} name={user.display_name} status={user.status} ></FriendCard>
                ))}
            </Users>
            
        </Container>
    )

}


export default ServerUsers