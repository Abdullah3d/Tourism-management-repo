import Swal from "sweetalert2";
import Footer from "../pages/Footer";
import BounceEffect from "./BounceEffect";

const AddTouristsSpot = () => {

    const handleAddTourists = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const average = form.average.value;
        const seasonality = form.seasonality.value;
        const travel = form.travel.value;
        const email = form.email.value;
        const user = form.user.value;
        const total = form.total.value;
        const photo = form.photo.value;

        const addTourist = {
            name,
            country,
            location,
            description,
            average,
            seasonality,
            travel,
            email,
            user,
            total,
            photo,
        };
        console.log(addTourist);

        // Perform your fetch request to submit the form data
        fetch("https://assignment-10-server-amber-rho.vercel.app/addTourist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addTourist),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "User Added Successfully",
                        icon: "success",
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while adding the user",
                    icon: "error",
                });
            });
    };

    return (
        <div>
            <div className="bg-[#ABABAB] p-24">
                <h2 className="text-3xl text-center mb-5 font-extrabold text-black">
                    Add Tourists spot
                </h2>
                <p className="text-center mb-8 font-semibold text-xl text-black">

                    Popular tourist spots on Saint Martin's Island include the stunning Sunset Point, <br />vibrant Chera Dwip Beach, and the natural beauty of Blue Lagoon. Each <br />offers unique experiences amidst the island's captivating scenery.
                </p>
                <form onSubmit={handleAddTourists}>
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
                                    type="number"
                                    name="average"
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
                                    placeholder="travel time"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span>Email</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* from row */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span>User Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="user"
                                    placeholder="user"
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
                            Add Tourist Spot
                        </button>
                    </div>
                </form>
            </div>
            <BounceEffect></BounceEffect>
            <Footer />
        </div>
    );
};

export default AddTouristsSpot;