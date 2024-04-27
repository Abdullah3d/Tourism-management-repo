
const TouristsSpot = () => {
    return (
        <div className="bg-[#ABABAB] p-24">
            <h2 className="text-3xl text-center mb-5 font-extrabold">Tourists spot</h2>
            <p className="text-center mb-8 font-semibold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Cum vitae aut assumenda repellat porro tenetur eaque sequi, nulla laborum maxime <br/>nobis perspiciatis eos, natus accusamus voluptatem qui consectetur nostrum culpa.</p>
            {/* from row name and tourist*/}
            <div className="md:flex">
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
                        <span>Average cost</span>
                    </label>
                    <label className="input-group">
                        <input type="text"
                            name="average"
                            placeholder="Average cost"
                            className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* from row name and tourist*/}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span> Total Visitors Per Year</span>
                    </label>
                    <label className="input-group">
                        <input type="text"
                            name="total"
                            placeholder="Total Visitors Per Year"
                            className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span>Travel time</span>
                    </label>
                    <label className="input-group">
                        <input type="travel"
                            name="tourist"
                            placeholder="Travel time"
                            className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* from row name and tourist*/}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span>Tourist Spot</span>
                    </label>
                    <label className="input-group">
                        <input type="text"
                            name="name"
                            placeholder="Country name"
                            className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span>Tourists Spot name</span>
                    </label>
                    <label className="input-group">
                        <input type="text"
                            name="tourist"
                            placeholder=" tourists spot name"
                            className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TouristsSpot;