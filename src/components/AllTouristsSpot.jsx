

import { useLoaderData } from "react-router-dom";
import ShowAllTouristsSpot from "./ShowAllTouristsSpot";
import { useState } from "react";
import Footer from "../pages/Footer";

const AllTouristsSpot = () => {
    const tourists = useLoaderData();
    const [sortOrder, setSortOrder] = useState("");
    // console.log(sortOrder)
    const handleSortChange = (event) => {
      const  sortOrder = event.target.value
        if (sortOrder == "ascending") {
            const sorted = [...tourists].sort((a, b) => b.average - a.average);

            setSortOrder(sorted)

        }
    };

    return (
        <div className=" p-5">
            <div className="text-center p-4 text-xl font-semibold ">
                <label  htmlFor="sort">Sort by Average Cost:</label>
                <select id="sort" onChange={handleSortChange} >
                    <option selected disabled >select</option>
                    <option value="ascending">Ascending</option>
                </select>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {(sortOrder ? sortOrder : tourists)?.map((tourist) => (
                    <ShowAllTouristsSpot
                        key={tourist._id}
                        tourist={tourist}
                    ></ShowAllTouristsSpot>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristsSpot;
