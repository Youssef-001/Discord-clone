import ServerBar from './ServerBar'
import Friends from './Friends'
import styled from 'styled-components'

const HomeDiv = styled.div`

display:grid;

grid-template-columns: auto 1fr 6fr;

`
function Home()
{
    return <HomeDiv>
    <ServerBar></ServerBar>
    <Friends></Friends>
    </HomeDiv>

}


export default Home;