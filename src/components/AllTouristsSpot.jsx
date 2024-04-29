// import { useLoaderData } from "react-router-dom";
// import ShowAllTouristsSpot from "./ShowAllTouristsSpot";

// const AllTouristsSpot = () => {
//     const tourists = useLoaderData()
//     console.log(tourists);
//     return (
//         <div className="grid grid-cols-2 gap-4 p-5">
//             {
//                 tourists.map( tourist => <ShowAllTouristsSpot key={tourist._id} tourist={tourist} ></ShowAllTouristsSpot> )
//             }
//         </div >
//     );
// };

// export default AllTouristsSpot;

import { useLoaderData } from "react-router-dom";
import ShowAllTouristsSpot from "./ShowAllTouristsSpot";
import { useState } from "react";

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
            <div className="text-center p-4 text-xl font-semibold">
                <label  htmlFor="sort">Sort by Average Cost:</label>
                <select id="sort" onChange={handleSortChange} >
                    <option selected disabled >select</option>
                    <option value="ascending">Ascending</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {(sortOrder ? sortOrder : tourists)?.map((tourist) => (
                    <ShowAllTouristsSpot
                        key={tourist._id}
                        tourist={tourist}
                    ></ShowAllTouristsSpot>
                ))}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
