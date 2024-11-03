import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Heading from "../heading/Heading";


const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div>
              {/* <Heading title={'another heading'} subtitle={'another subtitle'}></Heading> */}
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Heading title='Brouse coffee by category' subtitle='Choose your coffe category'></Heading>
            {/* category tab section */}
         <Category categories={categories}></Category>
            {/* dynamic component */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;