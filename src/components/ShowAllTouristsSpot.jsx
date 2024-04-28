import { Link } from "react-router-dom";


const ShowAllTouristsSpot = ({ tourist }) => {
    const { _id, name, country, description, average, location, season, travel, photo, total } = tourist;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-10 gap-5">
            <figure><img className="w-[400px] h-[300px] " src={photo} alt="Movie" /></figure>
            <div className="card-body font-light">
                <h2 className="card-title">{name}</h2>
                <p>{average}</p>
                <p>{total}</p>
                <p>{travel}</p>
                <p>{season}</p>
                <Link to={`/view/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                
            </div>
        </div>
    );
};

export default ShowAllTouristsSpot;