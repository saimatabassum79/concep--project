import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div>
            {/* navbar setion */}
            <Navbar></Navbar>
            {/* dynamic section */}
            <div className="min-h-[calc(100vh-232px)]  container mx-auto px-16">
              <Outlet></Outlet>
            </div>
            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;