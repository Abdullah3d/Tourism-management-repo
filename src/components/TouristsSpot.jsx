import Swal from 'sweetalert2'



const TouristsSpot = () => {
    const handleTouristSpot = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const country = form.country.value;
        const description = form.description.value;
        const location = form.location.value;
        const season = form.season.value;
        const travel = form.travel.value;
        const photo = form.photo.value;

        const newSpot = { name, country, description, location, season, travel, photo }
        console.log(newSpot);


        // send data to the server
        fetch('https://assignment-10-server-amber-rho.vercel.app/tourist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "User Added Successfully",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className="bg-[#ABABAB] p-24">
            <h2 className="text-3xl text-center mb-5 font-extrabold">Tourists spot</h2>
            <p className="text-center mb-8 font-semibold text-xl">Saint Martin's Island, a coveted tourist spot, enchants visitors with<br/> its pristine beaches, azure waters, and vibrant coral reefs. Sunset Point,<br/> Chera Dwip Beach, and Blue Lagoon beckon travelers seeking natural beauty and relaxation.</p>
            <form onSubmit={handleTouristSpot}>
                {/* from row name and tourist*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Tourist Spot</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="name"
                                placeholder="Tourists spot name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="country"
                                placeholder="Country name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row name and tourist*/}
                <div className="md:flex mb-8 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="description"
                                placeholder="Description"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Location</span>
                        </label>
                        <label className="input-group">
                            <input type="travel"
                                name="location"
                                placeholder="Location"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row name and tourist*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Seasons</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="season"
                                placeholder="Seasons"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="travel"
                                placeholder="Travel time"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* photoUrl */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span>PhotoUrl</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="photo"
                                placeholder="PhotoUrl"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add tourist spot" className="btn btn-block" />
            </form>
        </div>
    );
};

export default TouristsSpot;