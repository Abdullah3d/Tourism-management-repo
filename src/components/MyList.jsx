import { useLoaderData } from "react-router-dom";
import Footer from "../pages/Footer";
import { useState } from "react";

const MyList = () => {
    const loadedMyLists = useLoaderData();
    const [users, setUsers] = useState(loadedMyLists);


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        loadedMyLists.map(list => <tr key={list._id}>
                            <th>1</th>
                            <td>{list.name}</td>
                            <td>{list.country}</td>
                            <td>{list.description}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Footer></Footer>
        </div>

    );
};

export default MyList;

