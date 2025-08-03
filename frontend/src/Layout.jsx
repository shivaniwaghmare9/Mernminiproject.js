
import {Outlet} from "react-router-dom" 
import Header from "./Components/Header";
import Topnav from "./Components/Topnav";
import Footer from "./Components/Footer";
const Layout=()=>{
    return(
        <>
        <div id="Head">
        <Header/>
        <Topnav/>
        </div>
         <Outlet/>
         <Footer/>
        </>
    )
}
export default Layout;