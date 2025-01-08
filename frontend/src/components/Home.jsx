import ServerBar from './ServerBar'
import Friends from './Friends'
import styled from 'styled-components'

const HomeDiv = styled.div`

display:grid;

grid-template-columns: auto auto 1fr;

`
function Home()
{
    return <HomeDiv>
    <ServerBar></ServerBar>
    <Friends></Friends>
    </HomeDiv>

}


export default Home;