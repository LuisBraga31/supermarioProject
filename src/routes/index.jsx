import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home/Home"
import Trailer from "../components/Trailer/Trailer"
import Header from "../components/Header/Header"

const RouteList = () => {
  return (
    <>
        <BrowserRouter>
        
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/trailer" element={<Trailer/>} />
        </Routes>

        </BrowserRouter> 
    </>
  )
}

export default RouteList