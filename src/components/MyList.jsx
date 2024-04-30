import { Link, useLoaderData } from "react-router-dom";
import Footer from "../pages/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import Spiner from "./Spiner";



const MyList = () => {
    const loadedMyLists = useLoaderData();
    const [users, setUsers] = useState(loadedMyLists);
    const [isLoading, setIsLoading] = useState(false);


    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-amber-rho.vercel.app/mylist/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setIsLoading(false);
                            Swal.fire({
                                title: "Good job!",
                                text: "Deleted successfully",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(list => list._id !== id);
                            setUsers(remainingUsers);
                        }
                    })
            }

        });
    }
    if (isLoading) {
        return <Spiner />
    }
    return (
        <div className="overflow-x-auto">
            <table className="table mb-10">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(list => <tr key={list._id}>
                            <th>1</th>
                            <td>{list.name}</td>
                            <td>{list.country}</td>
                            <td>{list.description}</td>
                            <td></td>
                            <td>
                                <button onClick={() => handleDelete(list._id)} className="btn">X</button>
                            </td>
                            <td>

                                <Link to={`/update/${list._id}`}><button className="btn">Update</button></Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Footer></Footer>
        </div>

    );
};

export default MyList;

