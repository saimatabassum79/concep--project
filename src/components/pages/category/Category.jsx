/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
const Category = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
       {
        categories.map(category=> <Link key={category.category}
             to={
                `/category/${category.category}`
             }
             
             role="tab" className="tab">{category.category}</Link>)
       }
        
      </div>
    );
};

export default Category;