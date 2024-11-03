import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import Mainlayout from "../layout/MainLayout";
import Home from "../Home/Home";
import Coffees from "../Coffees/Coffees";
import Dashboard from "../dahboard/Dashboard";
import CoffeeCards from "../coffeCard/CoffeeCards";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('../categories.json'),
                children:[
                    {
                        path:'/category/:category',
                        element:<CoffeeCards></CoffeeCards>,
                        loader:()=>fetch('../coffees.json')
                    }
                ]
            },
            {
                path:'/coffees',
                element:<Coffees></Coffees>,
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
            },
        ]
    }
])
export default routes
