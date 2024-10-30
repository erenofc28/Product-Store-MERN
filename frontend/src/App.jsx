
import { Button,Box } from '@chakra-ui/react';
import Home from './pages/home';
import Create from './pages/create';
import { Route, Router, Routes } from 'react-router-dom';
// import './App.css'
import Navbar from "./component/navbar.jsx"
function App() {
  

  return (
    <>
  <Box minH={"100vh"}>
  <Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/create" element={<Create/>} />
    </Routes>

  </Box>
    

    </>
  )
}

export default App

