import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home/Home"
import Trailer from "../components/Trailer/Trailer"
import Header from "../components/Header/Header"
import Grid from "../components/GridWallpaper/Grid"
import Info from "../components/Info/Info"

const RouteList = () => {
  return (
    <>
        <BrowserRouter>
        
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/info" element={<Info/>} />
          <Route path="/wallpapers" element={<Grid/>} />
          <Route path="/trailer" element={<Trailer/>} />
        </Routes>

        </BrowserRouter> 
    </>
  )
}

export default RouteList