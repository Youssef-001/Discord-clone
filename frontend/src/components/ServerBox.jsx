import styled from 'styled-components';

const Button = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
  width: 4rem;  /* Set the size for your button */
  height: 4rem;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;  /* Make the image cover the button */
  background-position: center; /* Position the background image */
  
  &:hover {
    opacity: 0.8;  /* Optional hover effect */
  }
`;

function ServerBox({ icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button bgImage={icon} />
    </div>
  );
}

export default ServerBox;
