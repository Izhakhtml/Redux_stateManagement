import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "../components/parts/Header.component";
import Footer from "../components/parts/Footer.component";
import Sidebar from "../components/parts/Sidebar.component";
import Home from "../components/screen/Home.component";
import User from "../components/screen/User.component";
import { ContextMode } from "../context/Context-mode.component";
import { useContext } from "react";
const ApiRouter = () => {
    const { mode, setMode } = useContext(ContextMode)
    const Mode =()=>{
        mode.map((res)=> 
        {
            if (res.statusMode == false) {
                
                setMode({...res});
                console.log(mode);
            }
        })
    }
    return (
        <div className="base_container"style={{background:mode.background,color:mode.color}}>
            <BrowserRouter> 
                <Header />
                <button onClick={Mode} >MODE</button>
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/User" element={<User />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default ApiRouter