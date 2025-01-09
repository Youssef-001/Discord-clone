import FriendsIcon from './FriendsIcon';
import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Button = styled.button`
  all: unset;
  color: #76919D;
  border-radius: 4px;
  padding: 2px 8px; /* Add horizontal padding if needed */
  margin: 0;
  cursor: pointer;
  line-height: 1; /* Ensures no extra height from text */
  &:hover {
    background-color: #3a3c42;
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

function FriendsHome() {
  return (
    <Main>
      <Div>
        <div>
          <FriendsIcon />
        </div>

        <Button>Online</Button>
        <Button>All</Button>
        <Button>Pending</Button>
        <Button2>Add Friend</Button2>
      </Div>

      <div>
        <p>Online — 1</p>
      </div>
    </Main>
  );
}

export default FriendsHome;
