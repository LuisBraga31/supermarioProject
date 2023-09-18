import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home/Home"

const RouteList = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter> 
    </>
  )
}

export default RouteList