
import './App.css'
import { Outlet } from 'react-router-dom'
// import { Web3Provider } from './context/Web3Context'

function App() {
  

  return (
    <>
    {/* <Web3Provider> */}
        <Outlet/>
    {/* </Web3Provider> */}
    </>
  )
}

export default App
