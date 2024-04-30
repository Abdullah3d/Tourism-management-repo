import { useLoaderData } from "react-router-dom";
import Footer from "../pages/Footer";
import Swal from "sweetalert2";

const Update = () => {

    const list = useLoaderData();
    const {_id, name, country, location, description, average, seasonality, travel, total, photo } = list;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const average = form.average.value;
        const seasonality = form.seasonality.value;
        const travel = form.travel.value;
        const total = form.total.value;
        const photo = form.photo.value;

        const  updatedSpot = { name, country, location, description, average, seasonality, travel, total, photo}
        console.log(updatedSpot);
        fetch(`https://assignment-10-server-amber-rho.vercel.app/mylist/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Good job!",
                    text: "User Added Successfully",
                    icon: "success",
                });
            }
       })
    }
    return (
        <div>
            <div className="bg-[#ABABAB] p-24 text-black">
                <h2 className="text-3xl text-center mb-5 font-extrabold text-black">
                    Update
                </h2>
                <p className="text-center text-black mb-8 font-semibold text-xl">
                    Popular tourist spots on Saint Martin's Island include the stunning Sunset Point, <br />vibrant Chera Dwip Beach, and the natural beauty of Blue Lagoon. Each <br />offers unique experiences amidst the island's captivating scenery.
                </p>
                <form onSubmit={handleUpdate}>
                    {/* from row name and tourist*/}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span> Tourists spot name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Tourists spot name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span> Country Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="country"
                                    defaultValue={country}
                                    placeholder="country name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* from row */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span>Location</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={location}
                                    placeholder="location"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span>Short description</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={description}
                                    placeholder="short description"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* from row */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span>Average cost</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="average"
                                    defaultValue={average}
                                    placeholder="average cost"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span>Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="seasonality"
                                    defaultValue={seasonality}
                                    placeholder="seasonality"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* from row */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span>Travel time</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="travel"
                                    defaultValue={travel}
                                    placeholder="travel time"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span> Total Visitors PerYear</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="total"
                                    defaultValue={total}
                                    placeholder=" totalVisitorsPerYear"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="photo"
                                defaultValue={photo}
                                placeholder="photo URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    {/* from row */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block rounded-md"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Update;