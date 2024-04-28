import { useLoaderData } from "react-router-dom";
import Footer from "../pages/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";


const MyList = () => {
    const loadedMyLists = useLoaderData();
    const [users, setUsers] = useState(loadedMyLists);

    const handleDelete = id => {
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
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
        fetch(`http://localhost:5000/mylist/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // Swal.fire({
                    //     title: "Good job!",
                    //     text: "Deleted successfully",
                    //     icon: "success"
                    //   });
                    const remainingUsers = users.filter(list => list._id !== id);
                    setUsers(remainingUsers);
                }
            })
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
                            {/* <td>
                                <button onClick={() => } className="btn"><GrUpdate />
                                </button>
                            </td> */}
                        </tr>)
                    }
                </tbody>
            </table>
            <Footer></Footer>
        </div>

    );
};

export default MyList;

