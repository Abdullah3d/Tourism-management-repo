import { useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
    const tourists = useLoaderData()
    console.log(tourists);
    return (
        <div>
            {
                tourists.map(touirst => (
                    <h2 key={touirst._id}>{touirst.country} </h2>
                ))
            }
        </div >
    );
};

export default AllTouristsSpot;