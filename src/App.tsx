import './App.css'
import { Home } from './components/home'
import {Navbar} from'./components/navbar'
import {useEffect} from 'react'



function App() {

  useEffect(()=>{
    document.title = process.env.OWNER_NAME + " : PortFolio" || "PortFolio"
  },[])

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
