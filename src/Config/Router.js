import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../Pages/Homee/Home'
import About from "../Pages/About/About"


const Router = () => {
return(

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter>
  
)
}


export default Router