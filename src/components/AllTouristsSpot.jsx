import { useLoaderData } from "react-router-dom";
import ShowAllTouristsSpot from "./ShowAllTouristsSpot";

const AllTouristsSpot = () => {
    const tourists = useLoaderData()
    console.log(tourists);
    return (
        <div className="grid grid-cols-2 gap-4 p-5">
            {
                tourists.map( tourist => <ShowAllTouristsSpot key={tourist._id} tourist={tourist} ></ShowAllTouristsSpot> )
            }
        </div >
    );
};

export default AllTouristsSpot;