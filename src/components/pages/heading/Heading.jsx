/* eslint-disable react/prop-types */


const Heading = ({title,subtitle}) => {
    return (
        <div className="flex  flex-col w-full justify-center items-center my-12">
            <h2 className="md:text-2xl lg:text-4xl text-xl mb-4 font-thin ">{title}</h2> 
            <h2 className="text-xl text-base text-gray-600 font-thin text-center ">{subtitle}</h2>
        </div>
    );
};

export default Heading;