import { useLoaderData } from "react-router-dom";
import Spiner from "./Spiner";
import Footer from "../pages/Footer";

const ViewTouristsSpot = () => {

    const views = useLoaderData();
    if (!views) {
        return <Spiner />
    }
    return (

       <div>
         <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
            <div className="grid w-[600px] h-[400px]">
                <figure><img src={views.photo} alt="Album" /></figure>
            </div>
            <div className="card-body gap-2">
                <h2 className="font-bold text-3xl">{views.name}</h2>
                <p className="font-bold text-2xl">{views.country}</p>
                    <p className="font-bold text-2xl">{views.location}</p>
                    <p className="font-bold text-2xl">{views.season}</p>
                    <p className="font-bold text-2xl">{views.travel}</p>
                    <p className="font-bold text-2xl">{views.description}</p>
            </div>
            
        </div>
        <Footer></Footer>
       </div>
    );
};

export default ViewTouristsSpot;