import { Link } from "react-router-dom";

const ShowTouristsSpot = ({ tourist }) => {

    const {_id, name, country, description, location, season, travel, photo } = tourist;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[600px] h-[200px]" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center mt-10">
                    <Link to={`/view/${_id}`} ><button className="btn btn-success  ">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShowTouristsSpot;