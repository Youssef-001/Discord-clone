import ServerBar from './ServerBar'
import Friends from './Friends'
import styled from 'styled-components'
import {useState} from 'react'
import ServerDialog from './ServerDialog'
const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 6fr;
  opacity: ${(props) => (props.serverDialog ? 0.3 : 1)};
  transition: opacity 0.3s ease; /* Smooth transition effect */
`;

function Home() {
  const [createServerDialoge, setCreateServerDialoge] = useState(false);

  return (
    <>
      <HomeDiv serverDialog={createServerDialoge}> 
        <ServerBar
          serverDialog={createServerDialoge}
          setDialog={setCreateServerDialoge}
        ></ServerBar>
        <Friends></Friends>
      {/* Overlay */}

      {/* Dialog */}
      </HomeDiv>
      {createServerDialoge && <ServerDialog />}

    </>
  );
}
export default Home;