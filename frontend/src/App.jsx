import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import styled from 'styled-components'
const GlobalReset = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures padding and border are included in the total width and height */
  }
`;
function App() {
  const [count, setCount] = useState(0)
  
  return (
      <Home></Home>
  )
}

export default App
