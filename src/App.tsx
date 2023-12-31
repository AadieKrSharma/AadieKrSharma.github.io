import './App.css'
import Navbar from './components/navbar/navbar'
import {useEffect} from 'react'



function App() {

  useEffect(()=>{
    document.title = process.env.OWNER_NAME + " : PortFolio" || "PortFolio"
  },[])

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
