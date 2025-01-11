import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../Pages/Homee/Home'
import About from "../Pages/About/About"


const Router = () => {

    const screenData = [
        {
            path: "/",
            compo: <Home />
        },
        {
            path: "/About",
            compo: <About />
        },
    ]
    return (

        <BrowserRouter>
            <Routes>
                {
                    screenData.map((elem, ind) => {
                        return <Route path={elem.path} element={elem.compo} />
                    })
                }
                {/* <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} /> */}
            </Routes>
        </BrowserRouter>

    )
}


export default Router